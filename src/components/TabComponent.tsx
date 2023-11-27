// components/TabComponent.tsx
import React from 'react';
import { Chip, Box, styled } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface TabComponentProps {
  selectedTab: string;
  onTabChange: (tab: string) => void;
}

// Add your custom styles here
const StyledChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(1),
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));

const TabComponent: React.FC<TabComponentProps> = ({ selectedTab, onTabChange }) => {
  const { t } = useTranslation();

  const handleTabChange = (tab: string) => {
    onTabChange(tab);
  };

  const tabs = ['apple', 'meta', 'netflix', 'google', 'twitter', 'tesla'];

  return (
    <Box display="flex" justifyContent="center" flexWrap="wrap" gap={1}>
      {tabs.map((tab) => (
        <StyledChip
          key={tab}
          label={t(tab)}
          onClick={() => handleTabChange(tab)}
          color={selectedTab === tab ? 'primary' : 'default'}
        />
      ))}
    </Box>
  );
};

export default TabComponent;
