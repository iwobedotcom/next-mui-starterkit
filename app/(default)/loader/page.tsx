import React from "react";
import { Box } from "@mui/material";
import "./loader.css";

function Loader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box component="span">
        <img src="/next.svg" alt="nextjs" />
      </Box>
    </Box>
  );
}

export default Loader;
