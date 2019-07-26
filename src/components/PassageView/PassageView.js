import React from "react";
import { Box, Text, Button } from "grommet";

export default ({ passage: { passageText = "", text = "", links = [] } }) => (
  <Box>
    <Text>{passageText}</Text>
    {links.map(({ name, pid }) => (
      <Button label={name} key={`${name}-${pid}`} />
    ))}
  </Box>
);
