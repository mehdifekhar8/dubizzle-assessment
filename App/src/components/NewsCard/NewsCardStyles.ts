import { styled } from "@mui/system";
import { Theme } from "@mui/system";

export const StyledNewsCard = styled("div")(({ theme }: { theme: Theme }) => ({
  display: "flex",
  border: "1px solid",
  borderColor: theme.palette.primary.main,
  borderRadius: theme.shape.borderRadius,
  overflow: "hidden",
  maxWidth: 800,
  marginBottom: theme.spacing(2),
  maxHeight:"350px"
}));

export const StyledImage = styled("img")(({ theme }: { theme: Theme }) => ({
  minWidth: 450,
  maxWidth: 450,
  objectFit: "cover",
  width: "100%",
  height: "auto",
  borderRadius: "8px",
}));

export const StyledContent = styled("div")(({ theme }: { theme: Theme }) => ({
  padding: theme.spacing(2),
}));

export const StyledTitle = styled("h2")(({ theme }: { theme: Theme }) => ({
  fontSize: "1.2rem",
  marginBottom: theme.spacing(1),
  color: theme.palette.text.primary,

}));

export const StyledDescription = styled("p")(({ theme }: { theme: Theme }) => ({
  color: theme.palette.text.secondary,
}));

export const StyledLink = styled("a")(({ theme }: { theme: Theme }) => ({
  textDecoration: "none",
  color: theme.palette.primary.main,
  fontWeight: "bold",
}));

export const ImageErrorText = styled("div")(({ theme }: { theme: Theme }) => ({
  color: theme.palette.error.main,
  padding: theme.spacing(2),
  textAlign: "center",
}));
