import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { Grommet } from "grommet";
import grommetTheme from "../src/styles/grommetTheme";

const req = require.context("../src/components", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const GrommetDecorator = storyFn => (
  <Grommet theme={grommetTheme}>{storyFn()}</Grommet>
);
addDecorator(GrommetDecorator);

configure(loadStories, module);

/*
BLOG:
Storybooks are cool!

Get you to think very atomically

Drill down from app to molecule to atoms and your storybook can be made up of atoms

Nest them and compose them together

Really get into thinking of your app as a set of building blocks

Data doesn't matter here!

Well it sort of does.

--

Also editing .storybook/config.js

*/
