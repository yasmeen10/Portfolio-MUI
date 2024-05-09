import React from "react";

import { Stack, Typography, Box, Button } from "@mui/material";

import myImage from "../assets/1c373c2f0716f7edaeab8527962ad86b-removebg-preview.png";

export default function About() {
  return (
    <>
      <Stack
        id="about"
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ width: "90%", margin: "auto", border: "1px solid" }}
      >
        <Box>
          <img src={myImage} width="70%" />
        </Box>
        <Box>
          <Box sx={{ position: "relative" }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                color: "rgba(255,255,255, 0.1)",
                zIndex: "-1",
                position: "absolute",
                top: "0px",
                left: "0px",
                fontSize: "7vw",
              }}
            >
              About
            </Typography>
            <Typography
              variant="h4"
              component="h4"
              sx={{ fontSize: "3.125rem", fontWeight: "700" }}
            >
              About Me
            </Typography>
          </Box>
          <Box sx={{ marginTop: "50px" }}>
            <Stack
              direction="row"
              spacing={2}
              justifyItems="center"
              alignItems="center"
              sx={{ marginBottom: "10px" }}
            >
              <Typography variant="h6" component="h6">
                Name :
              </Typography>
              <Typography
                variant="span"
                component="span"
                sx={{ color: (theme) => theme.palette.text.main }}
              >
                Yasmeen Walid
              </Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              justifyItems="center"
              alignItems="center"
              sx={{ marginBottom: "10px" }}
            >
              <Typography variant="h6" component="h6">
                Address :
              </Typography>
              <Typography
                variant="span"
                component="span"
                sx={{ color: (theme) => theme.palette.text.main }}
              >
                Cairo, Egypt
              </Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              justifyItems="center"
              alignItems="center"
              sx={{ marginBottom: "10px" }}
            >
              <Typography variant="h6" component="h6">
                E-mail :
              </Typography>
              <Typography
                variant="a"
                component="a"
                href=""
                sx={{ color: (theme) => theme.palette.text.main }}
              >
                yasmeenwaleed844@gmail.com
              </Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              justifyItems="center"
              alignItems="center"
              sx={{ marginBottom: "10px" }}
            >
              <Typography variant="h6" component="h6">
                Phone :
              </Typography>
              <Typography
                variant="span"
                component="span"
                sx={{ color: (theme) => theme.palette.text.main }}
              >
                (+020) 1003411729
              </Typography>
            </Stack>
          </Box>
          <Button sx={{ marginTop: "20px" }}>DOWNLOAD CV</Button>
        </Box>
      </Stack>
    </>
  );
}
