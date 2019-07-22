import React from "react";
import StyledFileInput from "./StyledFileInput";
import Button from "../Button";

const fileUploadSubmit = (e, callback = () => {}) => {
  e.preventDefault();
  callback(e);
};

export default ({ onSubmit, onChange, accept = ".json" }) => (
  <form onSubmit={e => fileUploadSubmit(e, onSubmit)}>
    <StyledFileInput onChange={onChange} accept={accept} />
    <Button type="submit" label="Submit" />
  </form>
);
