import React, { useState } from "react";

export default ({ onChange, type = "text" }) => {
  const [value, setValue] = useState("");

  const onInputChange = e => {
    setValue(e.target.value);
    onChange(e.target.value);
  };

  return <input type={type} onChange={onInputChange} value={value} />;
};
