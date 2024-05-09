import { Box, CssBaseline, GlobalStyles, Stack } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import LinearDeterminate from "./components/LinearDeterminate";
import CustomizedProgressBars from "./components/LinearDeterminate";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <CssBaseline />
      <GlobalStyles
        styles={{
          a: { textDecoration: "none" },
          li: { listStyle: "none" },
        }}
      />
      <Navbar />
      <Stack
        marginTop={10}
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={15}
      >
        <Banner />
        <About />
        <Resume />
        <Skills />
        <Contact />
      </Stack>
    </>
  );
}

export default App;
