// components/NewsList.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from './NewsCard';
import TabComponent from './TabComponent';
import Loader from './Loder';

interface NewsListProps {
  language: string;
}

interface Article {
  title: string;
  description: string;
  urlToImage?: string;
  url: string;
}

const NewsList: React.FC<NewsListProps> = ({ language }) => {
  const [selectedTab, setSelectedTab] = useState<string>('apple');
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: selectedTab,
            from: new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000).toISOString(), // Past 7 days
            sortBy: 'publishedAt',
            language,
            apiKey: '79ac97d3553b4fa48d3078ae5ce9ebf4', // Replace with your News API key
          },
        });

        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [selectedTab, language]);

  return (
    <div>
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
        </div>
      )}
    </div>
  );
};

export default NewsList;
