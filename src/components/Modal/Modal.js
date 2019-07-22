import React from "react";
import TitleBar from "../TitleBar/TitleBar";
import { Box, Button } from "grommet";

export default ({
  onClose,
  onConfirm,
  onCancel,
  title = "Modal Title",
  children = "Modal Content"
}) => (
  <Box elevation="large" round="small">
    <TitleBar onClose={onClose} round={{ size: "small", corner: "top" }}>
      {title}
    </TitleBar>
    <Box pad="medium" background="light-2">
      {children}
    </Box>
    <Box
      pad={{ horizontal: "medium", vertical: "xsmall", bottom: "medium" }}
      background="light-2"
      direction="row"
      gap="small"
      round={{ size: "small", corner: "bottom" }}
    >
      <Button onClick={onConfirm} label="Okay" primary />
      <Button onClick={onCancel} label="Cancel" />
    </Box>
  </Box>
);
