import React from "react";
import { storiesOf } from "@storybook/react";
import { action, decorate } from "@storybook/addon-actions";
import FileUpload from "./FileUpload";

const fileChangeAction = e => {
  action(
    `FileUpload - File Changed: ${
      e.target.files.length ? e.target.files[0].name : "no file"
    }`
  )(e);
};

storiesOf("FileUpload", module).add("default", () => (
  <FileUpload
    onSubmit={action("FileUpload - Submit")}
    onChange={fileChangeAction}
  />
));
