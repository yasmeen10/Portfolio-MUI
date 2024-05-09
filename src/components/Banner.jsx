import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import myImage from "../assets/1c373c2f0716f7edaeab8527962ad86b-removebg-preview.png";

export default function Banner() {
  return (
    <>
      <Stack
        id="banner"
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ width: "90%", margin: "auto" }}
      >
        <Box>
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
        <Box>
          <img src={myImage} width="70%" />
        </Box>
      </Stack>
    </>
  );
}
