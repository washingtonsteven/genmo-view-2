import React from "react";
import stories from "../../data/stories";
import { Button } from "grommet";
import DefaultBox from "../DefaultBox";

export default ({ title = "Library", onClose, onStoryClicked = () => {} }) => {
  const storyClicked = e => {
    const selectedStory = stories.find(
      story => story.ifid === e.target.dataset.storyId
    );

    onStoryClicked(selectedStory);
  };

  return (
    <DefaultBox title={title} onClose={onClose}>
      {stories.map(story => (
        <Button
          label={story.name}
          key={story.ifid}
          onClick={storyClicked}
          data-story-id={story.ifid}
        />
      ))}
    </DefaultBox>
  );
};
