import { Box } from "@chakra-ui/react";

import React from "react";

export const renderTrack = ({ style }) => {
  const trackStyle = {
    position: "absolute",
    top: 2,
    bottom: 2,
    right: 0,
    maxWidth: "100%",
    width: 6,
    transition: "opacity 200ms ease 0s",
    opacity: 0,
    background: "transparent",
    borderRadius: 3,
  };
  // return <div style={{ ...style, ...trackStyle }} {...props} />;
  return <div style={{ ...style, ...trackStyle }} />;
};
// export const renderThumb = ({ style, ...props }) => {
export const renderThumb = ({ style }) => {
  const thumbStyle = {
    borderRadius: 15,
    background: "rgba(222, 222, 222, .1)",
  };
  // return <div style={{ ...style, ...thumbStyle }} {...props} />;
  return <div style={{ ...style, ...thumbStyle }} />;
};
export const renderView = ({ style, ...props }) => {
  const viewStyle = {
    marginBottom: -22,
  };
  return (
    <Box
      me={{ base: "0px !important", lg: "-16px !important" }}
      style={{ ...style, ...viewStyle }}
      {...props}
    />
  );
};
