import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from './NewsCard';
import TabComponent from './TabComponent';
import Loader from './Loader';
import { styled } from '@mui/system';
import { Theme } from '@mui/system';

interface NewsListProps {
  language: string;
}

interface Article {
  title: string;
  description: string;
  urlToImage?: string;
  url: string;
}

const StyledNewsList = styled('div')(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: theme.spacing(4),
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
}));

const LoadMoreButton = styled('button')(({ theme }: { theme: Theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(1, 2),
    border: 'none',
    borderRadius: theme.shape.borderRadius,
    cursor: 'pointer',
    marginTop: theme.spacing(2),
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  }));

const NewsList: React.FC<NewsListProps> = ({ language }) => {
    const [selectedTab, setSelectedTab] = useState<string>('apple');
    const [articles, setArticles] = useState<Article[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
  
    const handleTabChange = async (tab: string) => {
      setSelectedTab(tab);
      setIsLoading(true);
      setPage(1); // Reset page when changing tabs
      fetchData(tab, 1);
    };
  
    const handleLoadMore = () => {
      const nextPage = page + 1;
      if (nextPage <= totalPages) {
        setPage(nextPage);
        fetchData(selectedTab, nextPage);
      }
    };
  
    const fetchData = async (tab: string, currentPage: number) => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: tab,
            from: new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000).toISOString(),
            sortBy: 'publishedAt',
            language,
            apiKey: '224f02634f4e487c847e4d45f295ddfc',
            page: currentPage,
            pageSize: 5,
          },
        });
  
        if (currentPage === 1) {
          setArticles(response.data.articles);
        } else {
          setArticles((prevArticles) => [...prevArticles, ...response.data.articles]);
        }
  
        setTotalPages(response.data.totalResults);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setIsLoading(false);
      }
    };
  
    useEffect(() => {
      fetchData(selectedTab, page);
    }, [selectedTab, page]); // Fetch data when the tab or page changes
  
    return (
      <StyledNewsList>
        <TabComponent selectedTab={selectedTab} onTabChange={handleTabChange} />
        {isLoading ? (
          <Loader />
        ) : (
          <div className="news-list">
            {articles.map((article, index) => (
              <NewsCard
                key={index}
                title={article.title}
                description={article.description}
                imageUrl={article.urlToImage || 'https://via.placeholder.com/150'}
                url={article.url}
              />
            ))}
           {page < totalPages && (
  <LoadMoreButton onClick={handleLoadMore}>
    Load More
  </LoadMoreButton>
)}
          </div>
        )}
      </StyledNewsList>
    );
  };
  
  export default NewsList;
  
  
  
  

