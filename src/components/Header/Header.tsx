import React from "react";
import { Typography, Box } from "@mui/material";

import LanguageSelector from "../LanguageSelector/LanguageSelector";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import TabComponent from "../Tab/TabComponent";

import { StyledHeader } from "./HeaderStyles";

interface HeaderProps {
  welcomeText: string;
  onLanguageChange: (language: string) => void;
  onTabChange: (tab: string) => void;
  selectedTab: string;
  onThemeToggle: () => void;
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({
  welcomeText,
  onLanguageChange,
  onTabChange,
  selectedTab,
  isDarkMode,
  onThemeToggle,
}) => {
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
