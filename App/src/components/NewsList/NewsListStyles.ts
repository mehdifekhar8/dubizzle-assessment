import { styled } from "@mui/system";
import { Theme } from "@mui/system";

export const StyledNewsList = styled("div")(({ theme }: { theme: Theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,

}));

export const LoadMoreButton = styled("button")(
  ({ theme }: { theme: Theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(1, 2),
    border: "none",
    borderRadius: theme.shape.borderRadius,
    cursor: "pointer",
    marginTop: theme.spacing(2),
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  })
);
