import React, { useState } from "react";
import { Button } from "grommet";
import FileUpload from "../FileUpload";
import Library from "../Library";
import DefaultBox from "../DefaultBox";

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
    <DefaultBox title="Home" gap="10px">
      {homeState === HOME_STATES.NONE && [
        <Button
          label="Select a Story"
          onClick={setLibraryState}
          key="library"
        />,
        <Button label="Upload a Story" onClick={setUploadState} key="upload" />
      ]}
      {homeState === HOME_STATES.UPLOAD && (
        <FileUpload onSubmit={onStorySelected} onClose={resetHomeState} />
      )}
      {homeState === HOME_STATES.SELECT && (
        <Library onStoryClicked={onStorySelected} onClose={resetHomeState} />
      )}
    </DefaultBox>
  );
};
