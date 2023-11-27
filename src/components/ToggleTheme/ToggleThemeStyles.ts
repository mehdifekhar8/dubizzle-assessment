import { styled } from "@mui/system";
import { Switch } from "@mui/material";

export const CustomSwitch = styled(Switch)(({ theme }) => ({
  width: 60,
  height: 40,
  padding: 4,
  "& .MuiSwitch-switchBase": {
    "&.Mui-checked": {
      marginRight: "0",
      color: theme.palette.common.white,
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.primary.main,
        opacity: 1,
      },
      "& .MuiSwitch-thumb": {
        color: theme.palette.common.white,
      },
    },
  },
}));
