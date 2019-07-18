import React, { Component } from "react";
import { Genmo } from "@esaevian/genmo-v2";
import GenmoTest from "./data/02-GenmoTest.json";

class GenmoView extends Component {
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

export default GenmoView;
