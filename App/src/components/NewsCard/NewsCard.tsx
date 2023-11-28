import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import {
  StyledNewsCard,
  StyledImage,
  StyledContent,
  StyledTitle,
  StyledDescription,
  StyledLink,
} from "./NewsCardStyles";
import Loader from "../Loader";

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
  const [imageLoading, setImageLoading] = useState<boolean>(true);
  const [imageError, setImageError] = useState<boolean>(false);
  const { t, i18n } = useTranslation();

  const handleLoad = () => {
    setImageLoading(false);
  };

  const handleError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  // For fixing a bug where the error keeps displaying
  useEffect(() => setImageError(false),[title]);


  return (
    <StyledNewsCard dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      {imageLoading && <Loader width="100%" height="auto" />}
      {!imageError &&( 
        <StyledImage
          src={imageUrl}
          alt={title}
          onLoad={handleLoad}
          onError={handleError}
          style={{
            width: "300px",
            height: "auto",
            borderRadius: "8px",
          }}
        />
      )}
      {imageError && <div className="image-error">{t("couldNotLoadImage")}</div>}
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
