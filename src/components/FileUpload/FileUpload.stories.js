import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import FileUpload from "./FileUpload";

storiesOf("FileUpload", module).add("default", () => (
  <FileUpload
    onSubmit={action("FileUpload - Submit")}
    onChange={action("FileUpload - File Changed")}
  />
));
