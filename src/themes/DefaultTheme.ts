import { createTheme, ThemeOptions } from "@mui/material";

export default (mode: "dark" | "light") => {
  const themeOptions: ThemeOptions = {
    palette: {
      mode: mode,
      primary: {
        main: mode === "dark" ? "#f5b41a" : "#143d59",
      },
      secondary: {
        main: mode === "dark" ? "#FAD889" : "#f5b41a",
      },
      text: {
        primary: mode === "dark" ? "#ffffff" : "#000000",
        secondary: mode === "dark" ? "#aaaaaa" : "#333333",
      },
    },
    shape: {
      borderRadius: 10,
    },
    typography: {
      fontFamily: '"Alexandria", "Suez One", sans-serif;',
      h1: {
        fontSize: 40,
        color: "text.primary",
      },
      h2: {
        fontSize: 36,
        color: "text.primary",
      },
      h3: {
        fontSize: 30,
        color: "text.primary",
      },
      h4: {
        fontSize: 26,
        color: "text.primary",
      },
      h5: {
        fontSize: 22,
        color: "text.primary",
      },
      h6: {
        fontSize: 16,
        color: "text.primary",
      },
    },
    direction: "rtl",
    spacing: 12,
  };

  const theme = createTheme(themeOptions);

  return createTheme(theme, {
    palette: {
      info: {
        main: theme.palette.secondary.main,
      },
    },
  });
};
