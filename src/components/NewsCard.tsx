// components/NewsCard.tsx
import React from 'react';

interface NewsCardProps {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, description, imageUrl, url }) => {
  return (
    <div className="news-card">
      <img src={imageUrl} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
