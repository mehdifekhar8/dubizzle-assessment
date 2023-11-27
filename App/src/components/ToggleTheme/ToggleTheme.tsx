import React from "react";
import { Tooltip } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { CustomSwitch } from "./ToggleThemeStyles";

interface ToggleThemeProps {
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

const ToggleTheme: React.FC<ToggleThemeProps> = ({
  isDarkMode,
  onThemeToggle,
}) => {
  return (
    <Tooltip title={`Switch to ${isDarkMode ? "Light" : "Dark"} Theme`} arrow>
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
