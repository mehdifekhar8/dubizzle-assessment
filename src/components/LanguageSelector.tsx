// components/common/LanguageSelector/LanguageSelector.tsx
import React, { useState } from 'react';
import { Switch, Tooltip } from '@mui/material';
import { styled } from '@mui/system';

const CustomSwitch = styled(Switch)(({ theme }) => ({
  width: 60,
  height: 40,
  padding: 4,
  '& .MuiSwitch-switchBase': {
    '&.Mui-checked': {
      marginRight: '0',
      color: theme.palette.common.white,
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.primary.main,
        opacity: 1,
      },
      '& .MuiSwitch-thumb': {
        color: theme.palette.common.white,
      },
    },
  },
}));

interface LanguageSelectorProps {
  onLanguageChange: (language: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onLanguageChange }) => {
  const [isArabic, setArabic] = useState<boolean>(false);

  const toggleLanguage = () => {
    setArabic(!isArabic);
    const language = isArabic ? 'en' : 'ar';
    onLanguageChange(language);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Tooltip title={`Switch to ${isArabic ? 'English' : 'Arabic'}`} arrow>
        <CustomSwitch
          checked={isArabic}
          onChange={toggleLanguage}
          color="default"
        />
      </Tooltip>
    </div>
  );
};

export default LanguageSelector;
