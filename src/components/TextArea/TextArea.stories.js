import React from "react";
import { storiesOf } from "@storybook/react";
import TextArea from "./TextArea";

storiesOf("TextArea", module).add("default", () => (
  <TextArea>Lots of text goes here</TextArea>
));
