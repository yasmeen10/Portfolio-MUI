import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar
      position="static"
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
        <Typography
          component="li"
          variant="li"
          sx={{
            borderBottom: "1px solid transparent",
            ":hover": { color: "#ffbd39", borderBottom: "1px solid" },
          }}
        >
          <Typography
            component="a"
            variant="a"
            href="/#banner"
            sx={{ color: "#fff", ":hover": { color: "#ffbd39" } }}
          >
            Home
          </Typography>
        </Typography>
        <Typography
          component="li"
          variant="li"
          sx={{
            borderBottom: "1px solid transparent",
            ":hover": { color: "#ffbd39", borderBottom: "1px solid" },
          }}
        >
          <Typography
            component="a"
            variant="a"
            href="/#about"
            sx={{ color: "#fff", ":hover": { color: "#ffbd39" } }}
          >
            About
          </Typography>
        </Typography>
        <Typography
          component="li"
          variant="li"
          sx={{
            borderBottom: "1px solid transparent",
            ":hover": { color: "#ffbd39", borderBottom: "1px solid" },
          }}
        >
          <Typography
            component="a"
            variant="a"
            href="/#education"
            sx={{ color: "#fff", ":hover": { color: "#ffbd39" } }}
          >
            Education
          </Typography>
        </Typography>
        <Typography
          component="li"
          variant="li"
          sx={{
            borderBottom: "1px solid transparent",
            ":hover": { color: "#ffbd39", borderBottom: "1px solid" },
          }}
        >
          <Typography
            component="a"
            variant="a"
            sx={{ color: "#fff", ":hover": { color: "#ffbd39" } }}
          >
            Skills
          </Typography>
        </Typography>
        <Typography
          component="li"
          variant="li"
          sx={{
            borderBottom: "1px solid transparent",
            ":hover": { color: "#ffbd39", borderBottom: "1px solid" },
          }}
        >
          <Typography
            component="a"
            variant="a"
            href="/#contact"
            sx={{ color: "#fff", ":hover": { color: "#ffbd39" } }}
          >
            Contact Us
          </Typography>
        </Typography>
      </Stack>
    </AppBar>
  );
}
