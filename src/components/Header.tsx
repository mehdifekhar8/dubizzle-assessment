import React from 'react';
import { Typography, Box } from '@mui/material';
import LanguageSelector from './LanguageSelector';

interface HeaderProps {
  welcomeText: string;
  onLanguageChange: (language: string) => void;
}

const Header: React.FC<HeaderProps> = ({ welcomeText, onLanguageChange }) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" padding={2}>
      <Typography variant="h4">{welcomeText}</Typography>
      <LanguageSelector onLanguageChange={onLanguageChange} />
    </Box>
  );
};

export default Header;
