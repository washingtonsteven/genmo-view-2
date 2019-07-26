import React, { useRef, useState } from "react";
import { Box, Button } from "grommet";
import styled from "styled-components";

const Input = styled.input.attrs({
  type: "file"
})`
  position: relative;
  left: -9999px;
`;

const Label = styled.label`
  height: 100%;
  cursor: pointer;
`;

const boxProps = {
  border: {
    color: "accent-1",
    size: "large",
    style: "dashed"
  },
  round: "small",
  pad: "small",
  height: "100%"
};

export default ({ accept, onChange = () => {}, onSubmit = () => {} }) => {
  const inputRef = useRef(null);
  const [currentFile, setCurrentFile] = useState(null);

  const onFileChange = e => {
    if (e.target.files.length) {
      setCurrentFile(e.target.files[0]);
    }
    onChange(e);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <Box {...boxProps} as="form" onSubmit={onFormSubmit}>
      <Label
        onClick={e => inputRef && inputRef.current && inputRef.current.click()}
      >
        <span>
          {currentFile ? currentFile.name : "Upload your files here!"}
        </span>
        <Input onChange={onFileChange} ref={inputRef} accept={accept} />
      </Label>
      <Button type="submit" label="Submit" />
    </Box>
  );
};
