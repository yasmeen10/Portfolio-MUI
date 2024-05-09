import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Stack } from "@mui/material";
import { useState } from "react";

export default function Navbar() {
  const [activatedTab, setActivatedTab] = useState(false);

  const sections = [
    { name: "Home", to: "/#banner" },
    { name: "About", to: "/#about" },
    { name: "Education", to: "/#education" },
    { name: "Skills", to: "/#skills" },
    { name: "Contact Us", to: "/#contact" },
  ];

  const handleClickedTab = () => {
    setActivatedTab(true);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundImage: "none", boxShadow: "none" }}
    >
      {/* <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
      <Stack
        sx={{ padding: "10px" }}
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        component="ul"
        variant="ul"
      >
        {sections.map((sec, index) => (
          <Typography
            key={index}
            component="li"
            variant="li"
            sx={{
              borderBottom: "1px solid transparent",
              color: activatedTab ? "#ffbd39" : "#fff",
              ":hover": { color: "#ffbd39", borderBottom: "1px solid" },
            }}
            onClick={() => handleClickedTab()}
          >
            <Typography
              component="a"
              variant="a"
              href={sec.to}
              sx={{ color: "#fff", ":hover": { color: "#ffbd39" } }}
            >
              {sec.name}
            </Typography>
          </Typography>
        ))}
      </Stack>
    </AppBar>
  );
}
