import React from "react";
import "./loader.css";
import { Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

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
      <Link href="#">
        <Box component="span">
          <Image src="/next.svg" alt="nextjs" width={100} height={30} />
        </Box>
        <Box className="liquid" />
      </Link>
    </Box>
  );
}

export default Loader;
