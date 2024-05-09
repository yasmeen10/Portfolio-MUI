import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import theme from "../utils/Theme";

export default function Resume() {
  return (
    <>
      <Box width="90%" sx={{ margin: "auto" }} id="education">
        <Box
          sx={{
            position: "relative",
            textAlign: "center",
            marginBottom: "10%",
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              color: "rgba(255,255,255, 0.1)",
              zIndex: "-1",
              position: "absolute",
              top: "0",
              width: "100%",
              fontSize: "7vw",
            }}
          >
            EDUCATION
          </Typography>
          <Typography
            component="h4"
            variant="h4"
            sx={{ fontWeight: "700", fontSize: "3.125rem" }}
          >
            Education
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                border: "1px solid transparent",
                borderRadius: "5px",
                padding: "20px",
              }}
            >
              <Typography
                variant="h2"
                component="h2"
                color={(theme) => theme.palette.text.secondary}
                sx={{ marginBottom: "20px" }}
              >
                Oct,2023 - Jun,2024
              </Typography>
              <Typography
                variant="h2"
                component="h2"
                sx={{ marginBottom: "20px" }}
              >
                9-Month Diploma in Web and User interface Development
              </Typography>
              <Typography
                variant="span"
                component="span"
                sx={{
                  color: "#999999",
                  fontSize: "16px",
                  fontWeight: "600",
                  marginBottom: "20px",
                }}
              >
                Information Technology Institute
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                border: "1px solid transparent",
                borderRadius: "5px",
                padding: "20px",
                paddingBottom: "50px",
              }}
            >
              <Typography
                variant="h2"
                component="h2"
                color={theme.palette.text.secondary}
                sx={{ marginBottom: "20px" }}
              >
                2019 - 2023
              </Typography>
              <Typography
                variant="h2"
                component="h2"
                sx={{ marginBottom: "20px" }}
              >
                Bachelor of Computer science
              </Typography>
              <Typography
                variant="span"
                component="span"
                sx={{
                  color: "#999999",
                  fontSize: "16px",
                  fontWeight: "600",
                  marginBottom: "20px",
                }}
              >
                Suez Canal University
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
