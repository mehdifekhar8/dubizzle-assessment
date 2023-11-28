import React, { useState } from "react";
import { useTranslation } from "react-i18next";

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
  const {t} = useTranslation()
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
          loading="lazy"

        />
      ) : (
        <div className="image-error"> {t("couldNotLoadImage")}</div>
      )}
      <StyledContent>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        <StyledLink href={url} target="_blank" rel="noopener noreferrer">
          {t("readMore")}
        </StyledLink>
      </StyledContent>
    </StyledNewsCard>
  );
};

export default NewsCard;
