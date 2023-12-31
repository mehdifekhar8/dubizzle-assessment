import React, { useState, useEffect } from "react";
import axios from "axios";
import debounce from 'lodash.debounce';
import { useTranslation } from "react-i18next";

import NewsCard from "../NewsCard/NewsCard";
import Loader from "../Loader";
import { ITEMS_PER_PAGE } from "../../constants/constants";

import { StyledNewsList, LoadMoreButton } from "./NewsListStyles";

interface NewsListProps {
  language: string;
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

interface Article {
  title: string;
  description: string;
  urlToImage?: string;
  url: string;
}

const NewsList: React.FC<NewsListProps> = ({
  language,
  selectedTab,
}) => {
  const {t}=useTranslation()
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [error, setError] = useState("");

  const handleLoadMore = () => {
    const nextPage = page + 1;
    if (nextPage <= totalPages) {
      setPage(nextPage);
      fetchData(selectedTab, nextPage);
    }
  };
  const debouncedLoadMore = debounce(handleLoadMore, 300);


  const fetchData = async (tab: string, currentPage: number) => {
    try {
      const response = await axios.get("http://localhost:5000/get_news", {
        params: {
          q: tab,
          language,
          page: currentPage,
          pageSize: ITEMS_PER_PAGE,
        },
      });

      if (currentPage === 1) {
        setArticles(response.data.articles);
      } else {
        setArticles((prevArticles) => [
          ...prevArticles,
          ...response.data.articles,
        ]);
      }

      setTotalPages(response.data.totalResults);
    } catch (error) {
      console.error("Error fetching news:", error);
      setError(t("error"));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData(selectedTab, page);
  }, [ page, language]);

  useEffect(() => {
    setIsLoading(true);
    setArticles([])
    setPage(1)
    fetchData(selectedTab, 1);
   
  }, [selectedTab,language]);
  return (
    <StyledNewsList>
      
      <div className="news-list">
          {error && <p className="error-message">{error}</p>}
          {articles.map((article, index) => (
            <NewsCard
              key={index}
              title={article.title}
              description={article.description}
              imageUrl={article.urlToImage || "https://via.placeholder.com/150"}
              url={article.url}
            />
          ))}
          {isLoading && (
        <Loader  width="100%" height="auto" />
      ) }
          {page < totalPages && totalPages > ITEMS_PER_PAGE &&  (
            <LoadMoreButton onClick={debouncedLoadMore}>{t("loadMore")}</LoadMoreButton>
          )}
        </div>
    </StyledNewsList>
  );
};

export default NewsList;

