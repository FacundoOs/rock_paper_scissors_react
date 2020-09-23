import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <>
        <div>
          <h1 id="cy-title">Rock, Paper, Scissors</h1>
        </div>
        <div>
          <h2 id="cy-option">Choose game mode</h2>
        </div>
        <div>
          <button id="cy-userCpu">
            User vs CPU
          </button>
          <button id="cy-userUser">
            User vs User
          </button>
        </div>
      </>
    );
  }
}
