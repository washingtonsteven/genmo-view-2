import React from "react";
import { Box } from "grommet";
import TitleBar from "../TitleBar";

export default ({ children, title, onClose, ...boxProps }) => (
  <>
    {title && <TitleBar onClose={onClose}>{title}</TitleBar>}
    <Box
      pad={{ horizontal: "medium", vertical: "xsmall", bottom: "medium" }}
      background="light-2"
      round={{ size: "small", corner: "bottom" }}
      {...boxProps}
    >
      {children}
    </Box>
  </>
);
