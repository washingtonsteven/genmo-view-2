import React from "react";
import stories from "../../data/stories";
import { Box, Button } from "grommet";

export default ({ onStoryClicked = () => {} }) => {
  const storyClicked = e => {
    const selectedStory = stories.find(
      story => story.ifid === e.target.dataset.storyId
    );

    onStoryClicked(selectedStory);
  };

  return (
    <Box>
      {stories.map(story => (
        <Button
          label={story.name}
          key={story.ifid}
          onClick={storyClicked}
          data-story-id={story.ifid}
        />
      ))}
    </Box>
  );
};
