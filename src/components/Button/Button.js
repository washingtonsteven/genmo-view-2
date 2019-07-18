import React from "react";

export default ({ children, onClick, text = "Button Text" }) => (
  <button onClick={onClick}>{children || text}</button>
);
