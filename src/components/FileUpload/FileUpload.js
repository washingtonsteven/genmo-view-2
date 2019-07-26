import React, { useRef, useState } from "react";
import { Box, Button } from "grommet";
import styled from "styled-components";
import DefaultBox from "../DefaultBox";

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

export default ({
  title = "Upload a story",
  accept,
  onClose,
  onChange = () => {},
  onSubmit = () => {}
}) => {
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
    if (
      inputRef.current.files.length &&
      inputRef.current.files[0].type === "application/json"
    ) {
      const fileReader = new FileReader();
      fileReader.onload = onFileLoad;
      fileReader.readAsText(inputRef.current.files[0]);
    } else {
      onSubmit(null);
    }
  };

  const onFileLoad = e => {
    console.log("file loaded");
    try {
      const json = JSON.parse(e.target.result);
      onSubmit(json);
    } catch (e) {
      onSubmit(null);
    }
  };

  return (
    <DefaultBox title={title} onClose={onClose}>
      <Box {...boxProps} as="form" onSubmit={onFormSubmit}>
        <Label
          onClick={e =>
            inputRef && inputRef.current && inputRef.current.click()
          }
        >
          <span>
            {currentFile ? currentFile.name : "Upload your files here!"}
          </span>
          <Input onChange={onFileChange} ref={inputRef} accept={accept} />
        </Label>
        <Button type="submit" label="Submit" />
      </Box>
    </DefaultBox>
  );
};
