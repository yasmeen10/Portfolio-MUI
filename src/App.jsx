import { Box, CssBaseline, GlobalStyles, Stack } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

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
        marginTop={15}
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={20}
      >
        <Banner />
        <About />
        <Resume />
        <Contact />
      </Stack>
    </>
  );
}

export default App;
