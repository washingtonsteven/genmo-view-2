import React from "react";
import { Button, Text } from "grommet";

export default ({
  children,
  onClick,
  text = "Button Text",
  ...buttonProps
}) => (
  <Button
    onClick={onClick}
    color="brand"
    label={children || text}
    {...buttonProps}
  />
);
