import React, { useState } from "react";

import {
  StyledNewsCard,
  StyledImage,
  StyledContent,
  StyledTitle,
  StyledDescription,
  StyledLink,
} from "./NewsCardStyles";

interface NewsCardProps {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  description,
  imageUrl,
  url,
}) => {
  const [imageError, setImageError] = useState<boolean>(false);

  const handleError = () => {
    setImageError(true);
  };
  return (
    <StyledNewsCard>
      {!imageError ? (
        <StyledImage
          src={imageUrl}
          alt={title}
          onError={handleError}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
      ) : (
        <div className="image-error">Could not load image</div>
      )}
      <StyledContent>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        <StyledLink href={url} target="_blank" rel="noopener noreferrer">
          Read more
        </StyledLink>
      </StyledContent>
    </StyledNewsCard>
  );
};

export default NewsCard;
