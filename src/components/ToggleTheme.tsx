// ToggleTheme.tsx
import React from 'react';
import { Switch, Tooltip, ThemeProvider, createTheme } from '@mui/material';
import { styled } from '@mui/system';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

interface ToggleThemeProps {
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

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

const ToggleTheme: React.FC<ToggleThemeProps> = ({ isDarkMode, onThemeToggle }) => {
  

  return (
      <Tooltip title={`Switch to ${isDarkMode ? 'Light' : 'Dark'} Theme`} arrow>
        <CustomSwitch
          checked={isDarkMode}
          onChange={onThemeToggle}
          icon={<Brightness4Icon />}
          checkedIcon={<Brightness7Icon />}
          color="default"
        />
      </Tooltip>
  );
};

export default ToggleTheme;
