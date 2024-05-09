import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function LinearDeterminate(props) {
  const [progress, setProgress] = React.useState(0);
  const { stopAt } = props;

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === stopAt) {
          clearInterval(timer);
          return oldProgress;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, stopAt);
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, [stopAt]);

  return (
    <Box>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          background: "rgba(255,255,255,0.1)",
          border: "1px solid transparent ",
          borderRadius: "10px",
          height: "15px",
          "& .MuiLinearProgress-barColorPrimary": {
            backgroundColor: "#ffbd39",
          },
        }}
      />
    </Box>
  );
}
