// components/TabComponent.tsx
import React from 'react';
import { Chip, Box, styled } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface TabComponentProps {
  selectedTab: string;
  onTabChange: (tab: string) => void;
}
interface StyledChipProps {
    selected: boolean;
  }
const StyledChip = styled(Chip)<StyledChipProps>(({ theme, selected }) => ({
    margin: theme.spacing(1),
    cursor: 'pointer',
    backgroundColor: selected ? theme.palette.primary.main : theme.palette.success.main,
    color: selected ? theme.palette.common.white : theme.palette.text.primary,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  }));

const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: 1,
});

const TabComponent: React.FC<TabComponentProps> = ({ selectedTab, onTabChange }) => {
  const { t } = useTranslation();

  const handleTabChange = (tab: string) => {
    onTabChange(tab);
  };

  const tabs = ['apple', 'meta', 'netflix', 'google', 'twitter', 'tesla'];

  return (
    <StyledBox>
      {tabs.map((tab) => (
      <StyledChip
      key={tab}
      label={t(tab)}
      onClick={() => handleTabChange(tab)}
      color={selectedTab === tab ? 'primary' : 'default'}
      selected={selectedTab === tab}
    />
      ))}
    </StyledBox>
  );
};

export default TabComponent;
