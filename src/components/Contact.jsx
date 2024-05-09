import { Box, Grid, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneIcon from "@mui/icons-material/Phone";
import React from "react";

export default function Contact() {
  return (
    <>
      <Box
        width="90%"
        sx={{ margin: "auto", paddingBottom: "100px" }}
        id="contact"
      >
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
            Contact
          </Typography>
          <Typography
            component="h4"
            variant="h4"
            sx={{ fontWeight: "700", fontSize: "3.125rem" }}
          >
            Contact Me
          </Typography>
        </Box>
        <Grid container rowSpacing={5} columnSpacing={2}>
          <Grid item md={4} xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  border: "1px solid transparent",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  width: "100px",
                  height: "100px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <LocationOnIcon
                  sx={{
                    color: "#ffbd39",
                    fontSize: "32px",
                    textAlign: "center",
                  }}
                />
              </Box>
              <Typography component="h4" variant="h4">
                Address
              </Typography>
              <Typography
                sx={{ color: "#999999", fontSize: "16px", fontWeight: "400" }}
                component="span"
                variant="span"
              >
                Cairo, Egypt
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  border: "1px solid transparent",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  width: "100px",
                  height: "100px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <EmailIcon
                  sx={{
                    color: "#ffbd39",
                    fontSize: "32px",
                    textAlign: "center",
                  }}
                />
              </Box>
              <Typography component="h4" variant="h4">
                E-mail
              </Typography>
              <Typography
                sx={{ color: "#999999", fontSize: "16px", fontWeight: "400" }}
                component="span"
                variant="span"
              >
                yasmeenwaleed844@gmail.com
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  border: "1px solid transparent",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  width: "100px",
                  height: "100px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PhoneIcon
                  sx={{
                    color: "#ffbd39",
                    fontSize: "32px",
                    textAlign: "center",
                  }}
                />
              </Box>
              <Typography component="h4" variant="h4">
                Phone
              </Typography>
              <Typography
                sx={{ color: "#999999", fontSize: "16px", fontWeight: "400" }}
                component="span"
                variant="span"
              >
                (+20)1003411729
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  border: "1px solid transparent",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  width: "100px",
                  height: "100px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <LinkedInIcon
                  sx={{
                    color: "#ffbd39",
                    fontSize: "32px",
                    textAlign: "center",
                  }}
                />
              </Box>
              <Typography component="h4" variant="h4">
                LinkedIn
              </Typography>
              <Typography
                component="a"
                variant="a"
                href="https://www.linkedin.com/in/yasmeen-walid/"
                sx={{ color: "#999999", fontSize: "16px", fontWeight: "400" }}
              >
                Yasmeen Walid
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  border: "1px solid transparent",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  width: "100px",
                  height: "100px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <GitHubIcon
                  sx={{
                    color: "#ffbd39",
                    fontSize: "32px",
                    textAlign: "center",
                  }}
                />
              </Box>
              <Typography component="h4" variant="h4">
                GitHub
              </Typography>
              <Typography
                component="a"
                variant="a"
                href="https://github.com/yasmeen10"
                sx={{ color: "#999999", fontSize: "16px", fontWeight: "400" }}
              >
                yasmeen walid
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
