import React from "react";
import { Box, Text, Button } from "grommet";
import DefaultBox from "../DefaultBox";

export default ({
  onLinkClicked,
  passage: { name: passageName, passageText = "", text = "", links = [] }
}) => {
  const linkClicked = e => {
    if (e.target.dataset.linkId) {
      const link = links.find(l => l.pid === e.target.dataset.linkId);
      if (link) onLinkClicked(link);
      else console.warn("Link not found: " + e.target.dataset.pid);
    } else {
      console.warn("Clicked a bad link!");
    }
  };
  return (
    <DefaultBox gap="10px" title={passageName}>
      <Text>{passageText}</Text>
      <Box gap="10px" direction="row">
        {links.map(({ name, pid }) => (
          <Button
            label={name}
            key={`${name}-${pid}`}
            onClick={linkClicked}
            data-link-id={pid}
          />
        ))}
      </Box>
    </DefaultBox>
  );
};
