import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    text: {
      main: "#999999",
      primary: "#fff",
      secondary: "#ffbd39",
    },
  },
  typography: {
    fontFamily: "Poppins",
    h2: {
      fontFamily: "Poppins",
      fontWeight: 800,
      fontSize: "26px",
    },
  },
  shape: {
    borderRadius: "40px",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffbd39",
          padding: "10px 20px",
          color: "#000000",
          border: "1px solid transparent",
          ":hover": {
            color: "#ffbd39",
            backgroundColor: "transparent",
            border: "1px solid #ffbd39",
          },
        },
      },
    },
  },
});

export default theme;
