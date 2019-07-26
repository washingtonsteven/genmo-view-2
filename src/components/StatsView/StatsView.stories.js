import React from "react";
import { storiesOf } from "@storybook/react";
import StatsView from "./StatsView";
import stories from "../../data/stories";
import { Genmo } from "@esaevian/genmo-v2";

const GenmoTest = stories[0];

// Do some manips on the story in order to get a sensical passage
const genmo = new Genmo(GenmoTest, { outputFunction: p => p });
genmo.followLink("2");
genmo.followLink("1");

storiesOf("StatsView", module).add("default", () => (
  <StatsView data={genmo.state.data} />
));
