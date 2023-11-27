import { styled } from "@mui/system";
import { Box } from "@mui/material";
interface StyledHeaderProps {
  isArabic: boolean;
}

export const StyledHeader = styled(Box)<StyledHeaderProps>(({ theme, isArabic }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  textAlign: isArabic ? 'right' : 'left',
  flexDirection: isArabic ? 'row-reverse' : 'row',
}));
