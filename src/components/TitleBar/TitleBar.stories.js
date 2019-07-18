import React from "react";
import { storiesOf } from "@storybook/react";
import TitleBar from "./TitleBar";

storiesOf("TitleBar", module).add("default", () => (
  <TitleBar>Title Bar Text</TitleBar>
));
