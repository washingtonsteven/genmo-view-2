import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Modal from "./Modal";

storiesOf("Modal", module).add("default", () => (
  <Modal
    onClose={action("Modal - Close")}
    onConfirm={action("Modal - Confirm")}
    onCancel={action("Modal - Cancel")}
    title="Title for the Modal"
  >
    This is the content for the Modal isn't that neat?
  </Modal>
));
