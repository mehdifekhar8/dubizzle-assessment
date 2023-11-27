// App.tsx
import React from 'react';
import { Button, ThemeProvider, createTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import './App.css';
import ToggleTheme from './components/ToggleTheme';
import LanguageSelector from './components/LanguageSelector';
import i18n from './i18n';
import NewsList from './components/NewsList';
import Header from './components/Header';

const App: React.FC = () => {
  const { t } = useTranslation();
  const [isRtl, setIsRtl] = React.useState<boolean>(false);

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    setIsRtl(language === 'ar');
  };

  const theme = createTheme({
    direction: isRtl ? 'rtl' : 'ltr',
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <Header welcomeText={t('welcome')} onLanguageChange={handleLanguageChange} />

        <NewsList  language={i18n.language} />
     
      </div>
    </ThemeProvider>
  );
};

export default App;

