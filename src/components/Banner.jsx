import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import myImage from "../assets/1c373c2f0716f7edaeab8527962ad86b-removebg-preview.png";

export default function Banner() {
  return (
    <>
      <Grid
        container
        item
        spacing={5}
        id="banner"
        sx={{ width: "90%", margin: "auto" }}
      >
        <Grid xs={12} md={6}>
          <Box sx={{ marginTop: "150px" }}>
            <Typography
              variant="span"
              component="span"
              sx={{ color: (theme) => theme.palette.text.secondary }}
            >
              HELLO!
            </Typography>
            <Typography variant="h2" component="h2">
              I'm a
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  color: (theme) => theme.palette.text.secondary,
                }}
              >
                Yasmeen Walid
              </Typography>
            </Typography>
            <Typography variant="h4" component="h4">
              A Front-End developer
            </Typography>
          </Box>
        </Grid>
        <Grid sx={12} md={6}>
          <Box>
            <img src={myImage} width="70%" />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
