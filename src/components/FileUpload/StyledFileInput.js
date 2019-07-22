import React, { useRef, useState } from "react";
import { Box } from "grommet";
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
  height: "medium",
  width: "medium",
  pad: "small"
};

export default ({ accept, onChange = () => {} }) => {
  const inputRef = useRef(null);
  const [currentFile, setCurrentFile] = useState(null);

  const onFileChange = e => {
    if (e.target.files.length) {
      setCurrentFile(e.target.files[0]);
    }
    onChange(e);
  };

  return (
    <Box {...boxProps}>
      <Label
        onClick={e => inputRef && inputRef.current && inputRef.current.click()}
      >
        {currentFile ? currentFile.name : "Upload your files here!"}
        <Input onChange={onFileChange} ref={inputRef} accept={accept} />
      </Label>
    </Box>
  );
};
