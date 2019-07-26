import React from "react";
import { storiesOf } from "@storybook/react";
import Library from "./Library";
import { action } from "@storybook/addon-actions";

const storyClicked = e =>
  action(`Library - Story Clicked (${e ? e.name : "no story"})`)(e);

storiesOf("Library", module).add("default", () => (
  <Library onStoryClicked={storyClicked} />
));
