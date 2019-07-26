import React from "react";
import { Box, Button } from "grommet";
import { FormClose } from "grommet-icons";

export default ({ children, onClose, ...boxProps }) => (
  <Box
    background="accent-1"
    pad={{ horizontal: "medium", vertical: onClose ? "xsmall" : "small" }}
    direction="row"
    justify="between"
    align="center"
    round={{ size: "small", corner: "top" }}
    {...boxProps}
  >
    {children}
    {onClose && <Button icon={<FormClose />} label="" onClick={onClose} />}
  </Box>
);
