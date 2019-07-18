import React from "react";
import { storiesOf } from "@storybook/react";
import Heading from "./Heading";

storiesOf("Heading", module)
  .add("default", () => <Heading>Default Heading</Heading>)
  .add("custom level", () => <Heading level={2}>Heading Level 2</Heading>);
