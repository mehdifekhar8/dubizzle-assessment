// components/NewsCard.tsx
import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Theme } from '@mui/system';

interface NewsCardProps {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}

const StyledNewsCard = styled('div')(({ theme }: { theme: Theme }) => ({
    display: 'flex',
    border: '1px solid',
    borderColor: theme.palette.primary.main,
    borderRadius: theme.shape.borderRadius,
    overflow: 'hidden',
    maxWidth: 800,
    marginBottom: theme.spacing(2),
  }));

  const StyledImage = styled('img')(({ theme }: { theme: Theme }) => ({
    minWidth: 450,
    maxWidth: 450,

    objectFit: 'cover',
  }));
  
  const StyledContent = styled('div')(({ theme }: { theme: Theme }) => ({
    padding: theme.spacing(2),
  }));
  
  const StyledTitle = styled('h2')(({ theme }: { theme: Theme }) => ({
    fontSize: '1.2rem',
    marginBottom: theme.spacing(1),
  }));
  
  const StyledDescription = styled('p')(({ theme }: { theme: Theme }) => ({
    color: theme.palette.text.secondary,
  }));
  
  const StyledLink = styled('a')(({ theme }: { theme: Theme }) => ({
    textDecoration: 'none',
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  }));
const NewsCard: React.FC<NewsCardProps> = ({ title, description, imageUrl, url }) => {
    const [imageError, setImageError] = useState<boolean>(false);

  const handleError = () => {
    // Handle image loading errors
    setImageError(true);
  };
  return (
    <StyledNewsCard>
      {!imageError ? (
        <StyledImage
          src={imageUrl}
          alt={title}
          onError={handleError}
          style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
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
