import React, { useState, useEffect } from "react";
import axios from "axios";
import debounce from 'lodash.debounce';

import NewsCard from "../NewsCard/NewsCard";
import Loader from "../Loader";

import { StyledNewsList, LoadMoreButton } from "./NewsListStyles";
import { useTranslation } from "react-i18next";

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
  setSelectedTab,
}) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [error, setError] = useState("");
  const { t } = useTranslation();

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
          from: new Date(
            new Date().getTime() - 7 * 24 * 60 * 60 * 1000
          ).toISOString(),
          sortBy: "publishedAt",
          language,
          page: currentPage,
          pageSize: 5,
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
  }, [selectedTab, page, language]);
  
  const MemoizedNewsCard = React.memo(NewsCard);

  return (
    <StyledNewsList>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="news-list">
          {error && <p className="error-message">{error}</p>}
          {articles.map((article, index) => (
            <MemoizedNewsCard
              key={index}
              title={article.title}
              description={article.description}
              imageUrl={article.urlToImage || "https://via.placeholder.com/150"}
              url={article.url}
            />
          ))}
          {page < totalPages && (
            <LoadMoreButton onClick={debouncedLoadMore}>Load More</LoadMoreButton>
          )}
        </div>
      )}
    </StyledNewsList>
  );
};

export default NewsList;
//79ac97d3553b4fa48d3078ae5ce9ebf4
//224f02634f4e487c847e4d45f295ddfc
