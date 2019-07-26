import React from "react";
import TitleBar from "../TitleBar/TitleBar";
import { Box, Button } from "grommet";
import DefaultBox from "../DefaultBox/DefaultBox";

export default ({
  onClose,
  onConfirm,
  onCancel,
  title = "Modal Title",
  children = "Modal Content"
}) => (
  <DefaultBox title={title} onClose={onClose} elevation="large">
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
  </DefaultBox>
);
