import React from "react";
import { useTranslation } from "react-i18next";

import { StyledChip, StyledBox } from "./TabComponentStyles";

interface TabComponentProps {
  selectedTab: string;
  onTabChange: (tab: string) => void;
}

const TabComponent: React.FC<TabComponentProps> = ({
  selectedTab,
  onTabChange,
}) => {
  const { t } = useTranslation();

  const handleTabChange = (tab: string) => {
    onTabChange(tab);
  };

  const tabs = ["apple", "meta", "netflix", "google", "twitter", "tesla"];

  return (
    <StyledBox>
      {tabs.map((tab) => (
        <StyledChip
          key={tab}
          label={t(tab)}
          onClick={() => handleTabChange(tab)}
          color={selectedTab === tab ? "primary" : "default"}
          selected={selectedTab === tab}
        />
      ))}
    </StyledBox>
  );
};

export default TabComponent;
