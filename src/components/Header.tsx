import React from 'react';
import { Typography, Box } from '@mui/material';
import LanguageSelector from './LanguageSelector';
import ToggleTheme from './ToggleTheme';
import TabComponent from './TabComponent';

interface HeaderProps {
  welcomeText: string;
  onLanguageChange: (language: string) => void;
  onTabChange: (tab: string) => void;
  selectedTab: string;
}

const Header: React.FC<HeaderProps> = ({ welcomeText, onLanguageChange, onTabChange, selectedTab }) => {
  return (
    <Box display="flex" justifyContent="space-around" alignItems="center" padding={2}>
      <Typography variant="h4">{welcomeText}</Typography>
      <TabComponent selectedTab={selectedTab} onTabChange={onTabChange} />

      <Box display="flex"  alignItems="center">

        <ToggleTheme />
        <LanguageSelector onLanguageChange={onLanguageChange} />
      </Box>
    </Box>
  );
};

export default Header;
