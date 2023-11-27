import React from 'react';
import { Typography, Box, styled } from '@mui/material';
import LanguageSelector from './LanguageSelector';
import ToggleTheme from './ToggleTheme';
import TabComponent from './TabComponent';

interface HeaderProps {
  welcomeText: string;
  onLanguageChange: (language: string) => void;
  onTabChange: (tab: string) => void;
  selectedTab: string;
  onThemeToggle: () => void;
  isDarkMode: boolean;
}

const StyledHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2),
  backgroundColor: theme.palette.primary.main, // Adjust background color
  color: theme.palette.primary.contrastText, // Adjust text color
}));

const Header: React.FC<HeaderProps> = ({ welcomeText, onLanguageChange, onTabChange, selectedTab, isDarkMode, onThemeToggle }) => {
  return (
    <StyledHeader>
      <Typography variant="h4">{welcomeText}</Typography>
      <TabComponent selectedTab={selectedTab} onTabChange={onTabChange} />
      <Box display="flex" alignItems="center">
        <ToggleTheme isDarkMode={isDarkMode} onThemeToggle={onThemeToggle} />
        <LanguageSelector onLanguageChange={onLanguageChange} />
      </Box>
    </StyledHeader>
  );
};

export default Header;
