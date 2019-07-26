import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Home from "./Home";

const storySelected = e =>
  action(`Home - Story Selected (${e ? e.name : "no story"})`)(e);

storiesOf("Home", module).add("default", () => (
  <Home onStorySelected={storySelected} />
));
