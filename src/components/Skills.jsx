import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import LinearDeterminate from "./LinearDeterminate";

export default function Skills() {
  const skills = [
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 90 },
    { name: "MUI", percentage: 80 },
    { name: "JS", percentage: 75 },
    { name: "ReactJs", percentage: 70 },
    { name: "AngularJs", percentage: 70 },
  ];

  return (
    <>
      <Box width="90%" id="skills">
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
            SKILLS
          </Typography>
          <Typography
            component="h4"
            variant="h4"
            sx={{ fontWeight: "700", fontSize: "3.125rem" }}
          >
            Skills
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {skills.map((skill) => (
            <Grid item xs={12} md={6} key={skill.name}>
              <Box>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ padding: "5px" }}
                >
                  <Typography variant="span" component="span">
                    {skill.name}
                  </Typography>
                  <Typography variant="span" component="span">
                    {skill.percentage}%
                  </Typography>
                </Stack>
                <LinearDeterminate stopAt={skill.percentage} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
