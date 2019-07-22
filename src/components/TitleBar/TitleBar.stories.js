import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import TitleBar from "./TitleBar";

storiesOf("TitleBar", module).add("default", () => (
  <TitleBar onClose={action("TitleBar - Close")}>Title Bar Text</TitleBar>
));
