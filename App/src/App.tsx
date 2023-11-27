// App.tsx
import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import './App.css';

import i18n from './i18n';
import Header from './components/Header/Header';
import NewsList from './components/NewsList/NewsList';

const App: React.FC = () => {
  const { t } = useTranslation();
  const [isRtl, setIsRtl] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState<string>('apple');
  const [isDarkMode, setDarkMode] = useState<boolean>(false);

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    setIsRtl(language === 'ar');
  };

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  const handleThemeToggle = () => {
    setDarkMode(!isDarkMode);
  };

  const theme = createTheme({
    direction: isRtl ? 'rtl' : 'ltr',
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
    
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header
          welcomeText={t('welcome')}
          onLanguageChange={handleLanguageChange}
          onTabChange={handleTabChange}
          selectedTab={selectedTab}
          onThemeToggle={handleThemeToggle}
          isDarkMode={isDarkMode}
        />
        <NewsList language={i18n.language} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      
      </div>
    </ThemeProvider>
  );
}

export default App;
