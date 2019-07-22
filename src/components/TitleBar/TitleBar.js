import React from "react";
import { Box, Button } from "grommet";
import { FormClose } from "grommet-icons";

export default ({ children, onClose, ...boxProps }) => (
  <Box
    background="accent-1"
    pad={{ horizontal: "medium", vertical: "xsmall" }}
    direction="row"
    justify="between"
    align="center"
    {...boxProps}
  >
    {children}
    <Button icon={<FormClose />} label="" onClick={onClose} />
  </Box>
);
