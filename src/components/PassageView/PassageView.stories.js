import React from "react";
import { storiesOf } from "@storybook/react";
import PassageView from "./PassageView";
import stories from "../../data/stories";
import { Genmo } from "@esaevian/genmo-v2";
import { action } from "@storybook/addon-actions";

const GenmoTest = stories[0];

// Do some manips on the story in order to get a sensical passage
const genmo = new Genmo(GenmoTest, { outputFunction: p => p });
genmo.followLink("2");
genmo.followLink("1");
genmo.followLink("4");
const prompts = genmo.outputCurrentPassage().needsPrompt;
const promptValue = "Steve";
genmo.respondToPrompt({
  [prompts[0].key]: promptValue
});
genmo.followLink("1");

storiesOf("PassageView", module).add("default", () => (
  <PassageView
    passage={genmo.outputCurrentPassage()}
    onLinkClicked={action("PassageView - LinkClicked")}
  />
));
