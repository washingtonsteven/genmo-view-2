import React, { createElement } from "react";

export default ({ level = 1, children, ...props }) =>
  createElement(`h${level}`, props, children);
