import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "./Button";

storiesOf("Button", module)
  .add("children text", () => <Button>Child Text</Button>)
  .add("prop text", () => <Button text="Prop text" />)
  .add("default text", () => <Button />)
  .add("clickable", () => (
    <Button onClick={action("Button Clicked")}>Action onClick!</Button>
  ));
