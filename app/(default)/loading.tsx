"use client";

import React, { useState, useEffect } from "react";

const LoadingComponent = () => {
  const [loadingText, setLoadingText] = useState("Loading");

  useEffect(() => {
    const interval = setTimeout(() => {
      setLoadingText((prevText) =>
        prevText === "Loading..." ? "Loading" : prevText + "."
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="custom-spinner" role="status"></div>
      <p style={{ marginLeft: "10px" }}>{loadingText}</p>
    </div>
  );
};

export default LoadingComponent;
