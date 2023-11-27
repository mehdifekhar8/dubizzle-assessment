import React, { useState } from "react";
import { Tooltip } from "@mui/material";

import { CustomSwitch } from "./LanguageSelectorStyles";

interface LanguageSelectorProps {
  onLanguageChange: (language: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  onLanguageChange,
}) => {
  const [isArabic, setArabic] = useState<boolean>(false);

  const toggleLanguage = () => {
    setArabic(!isArabic);
    const language = isArabic ? "en" : "ar";
    onLanguageChange(language);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Tooltip title={`Switch to ${isArabic ? "English" : "Arabic"}`} arrow>
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
