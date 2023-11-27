import React, { useState } from "react";
import { Switch, Tooltip } from "@mui/material";
import { CustomSwitch } from "./LanguageSelectorStyles";
import { useTranslation } from "react-i18next";

interface LanguageSelectorProps {
  onLanguageChange: (language: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  onLanguageChange,
}) => {
  const [isArabic, setIsArabic] = useState<boolean>(false);
  const {t}= useTranslation()
  const toggleLanguage = () => {
    const switchedToArabic = !isArabic;
    setIsArabic(switchedToArabic);
    const language = switchedToArabic ? "ar" : "en";
    onLanguageChange(language);
  };

  const languageDisplay = !isArabic ? "العربية" : "English";

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Tooltip title={`${t("switchTo")} ${languageDisplay}`} arrow>
        <CustomSwitch
          checked={isArabic}
          onChange={toggleLanguage}
          inputProps={{ "aria-label": `${t("switchTo")} ${languageDisplay}` }}
         
        />
      </Tooltip>
      <div style={{ marginLeft: 8 }}>{t("languages")}</div>
    </div>
  );
};

export default LanguageSelector;
