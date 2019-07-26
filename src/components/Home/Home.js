import React, { useState } from "react";
import { Box, Button } from "grommet";
import FileUpload from "../FileUpload";
import Library from "../Library";
import TitleBar from "../TitleBar";

const HOME_STATES = {
  SELECT: "SELECT",
  UPLOAD: "UPLOAD",
  NONE: "NONE"
};

export default ({ onStorySelected }) => {
  const [homeState, setHomeState] = useState(HOME_STATES.NONE);

  const resetHomeState = () => setHomeState(HOME_STATES.NONE);
  const setLibraryState = () => setHomeState(HOME_STATES.SELECT);
  const setUploadState = () => setHomeState(HOME_STATES.UPLOAD);

  return (
    <Box>
      {homeState === HOME_STATES.NONE && (
        <>
          <Button label="Select a Story" onClick={setLibraryState} />
          <Button label="Upload a Story" onClick={setUploadState} />
        </>
      )}
      {homeState === HOME_STATES.UPLOAD && (
        <>
          <TitleBar onClose={resetHomeState}>Uploader</TitleBar>
          <FileUpload onSubmit={onStorySelected} />
        </>
      )}
      {homeState === HOME_STATES.SELECT && (
        <>
          <TitleBar onClose={resetHomeState}>Library</TitleBar>
          <Library onStoryClicked={onStorySelected} />
        </>
      )}
    </Box>
  );
};
