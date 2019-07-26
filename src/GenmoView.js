import React, { Component, useState, useEffect } from "react";
import { Genmo } from "@esaevian/genmo-v2";
import GenmoTest from "./data/02-GenmoTest.json";
import Home from "./components/Home/Home.js";
import PassageView from "./components/PassageView/index.js";
import { Grommet } from "grommet";
import grommetTheme from "./styles/grommetTheme";

class GenmoViewDebug extends Component {
  constructor(props) {
    super(props);

    this.genmo = new Genmo(GenmoTest, {
      outputFunction: passage => {
        this.setState(state => ({
          ...state,
          currentPassage: passage
        }));
      }
    });

    this.state = {
      currentPassage: null
    };
  }
  componentDidMount() {
    this.genmo.outputCurrentPassage();
  }
  linkClicked = e => {
    this.genmo.followLink(e.target.dataset.linkPid);
    this.genmo.outputCurrentPassage();
  };
  render() {
    const { currentPassage } = this.state;
    return (
      <div>
        Genmo View
        <pre>
          <code>{JSON.stringify(currentPassage || {}, null, 1)}</code>
        </pre>
        <div>
          {currentPassage &&
            currentPassage.links.map(link => (
              <button
                onClick={this.linkClicked}
                data-link-pid={link.pid}
                key={link.name}
              >
                {link.name}
              </button>
            ))}
        </div>
        <pre>
          <code>{JSON.stringify(this.genmo.state.data, null, 1)}</code>
        </pre>
      </div>
    );
  }
}

let genmo = null;
const GenmoView = () => {
  const [loading, setLoading] = useState(false);
  const [currentStory, setCurrentStory] = useState(null);

  useEffect(() => {
    if (!genmo && currentStory && loading) {
      genmo = new Genmo(currentStory, { outputFunction: p => p });
      setLoading(false);
    }
  });

  if (!currentStory)
    return (
      <Home
        onStorySelected={story => {
          setCurrentStory(story);
          setLoading(true);
        }}
      />
    );
  else if (genmo) return <PassageView passage={genmo.outputCurrentPassage()} />;
  else if (loading) return <>Loading</>;
  else
    return (
      <>
        uh oh.
        <br />
        <pre>
          <code>
            {JSON.stringify(
              { loading, currentStory, genmo: Boolean(genmo) },
              null,
              1
            )}
          </code>
        </pre>
      </>
    );
};

export default props => (
  <Grommet theme={grommetTheme}>
    <GenmoView {...props} />
  </Grommet>
);
