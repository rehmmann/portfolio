import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { purple, red, blueGrey, blue } from "@material-ui/core/colors";
import "./App.css";
import Cards from "./Components/Cards";
import React from "react";
import Header from "./Components/Header";
import Grid from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

export default function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: blue[900],
      },
      secondary: {
        // This is green.A700 as hex.
        main: "#1d7efc",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>

      <Grid />
      <Projects />
      <Contact />
    </>
  );
}
