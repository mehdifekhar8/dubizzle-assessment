// ToggleTheme.tsx
import React, { useState } from 'react';
import { Switch, Tooltip, useTheme, ThemeProvider, createTheme } from '@mui/material';
import { styled } from '@mui/system';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const CustomSwitch = styled(Switch)(({ theme }) => ({
  width: 60,
  height: 40,
  padding: 4,
  '& .MuiSwitch-switchBase': {
    '&.Mui-checked': {
      marginRight: '0', // Adjusted marginRight to center the icon
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

const ToggleTheme: React.FC = () => {
  const [isDarkMode, setDarkMode] = useState<boolean>(false);
  const theme = useTheme();

  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
  };

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
      <Tooltip title={`Switch to ${isDarkMode ? 'Light' : 'Dark'} Theme`} arrow>
        <CustomSwitch
          checked={isDarkMode}
          onChange={toggleTheme}
          icon={<Brightness4Icon />}
          checkedIcon={<Brightness7Icon />}
          color="default"
        />
      </Tooltip>
    </ThemeProvider>
  );
};

export default ToggleTheme;
