// App.tsx
import React from 'react';
import { Button, ThemeProvider, createTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import './App.css';
import ToggleTheme from './components/ToggleTheme';
import LanguageSelector from './components/LanguageSelector';
import i18n from './i18n';

const App: React.FC = () => {
  const { t } = useTranslation();
  const [isRtl, setIsRtl] = React.useState<boolean>(false);

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);

    // Set the direction based on the language
    setIsRtl(language === 'ar');
  };

  const theme = createTheme({
    direction: isRtl ? 'rtl' : 'ltr',
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="header">
          <h1>{t('welcome')}</h1>
          <ToggleTheme />
          <LanguageSelector onLanguageChange={handleLanguageChange} />
        </div>
        <Button variant="contained" color="primary">
          {t('helloButton')}
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default App;
