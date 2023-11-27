// components/TabComponent.tsx
import React from 'react';
import { Chip, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface TabComponentProps {
  selectedTab: string;
  onTabChange: (tab: string) => void;
}

const TabComponent: React.FC<TabComponentProps> = ({ selectedTab, onTabChange }) => {
  const { t } = useTranslation();

  const handleTabChange = (tab: string) => {
    onTabChange(tab);
  };

  const tabs = ['apple', 'meta', 'netflix', 'google', 'twitter', 'tesla'];

  return (
    <Box display="flex" justifyContent="center" flexWrap="wrap" gap={1}>
      {tabs.map((tab) => (
        <Chip
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
