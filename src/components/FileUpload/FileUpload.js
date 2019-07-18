import React from "react";

const fileUploadSubmit = (e, callback = () => {}) => {
  e.preventDefault();
  callback(e);
};

export default ({ onSubmit, onChange }) => (
  <form onSubmit={e => fileUploadSubmit(e, onSubmit)}>
    <input type="file" onChange={onChange} />
    <input type="submit" />
  </form>
);
