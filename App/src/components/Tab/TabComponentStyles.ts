import { styled } from "@mui/system";
import { Chip, Box } from "@mui/material";

interface StyledChipProps {
  selected: boolean;
}

export const StyledChip = styled(Chip)<StyledChipProps>(
  ({ theme, selected }) => ({
    margin: theme.spacing(1),
    cursor: "pointer",
    backgroundColor: selected
      ? theme.palette.primary.main
      : theme.palette.success.main,
    color: selected ? theme.palette.common.white : theme.palette.text.primary,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  })
);

export const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: 1,
});
