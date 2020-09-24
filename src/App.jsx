import React, { Component } from "react";
import UserVsCpu from "./components/UserVsCpu";
import UserVsUser from "./components/UserVsUser";
import HowToPlayGuide from "./components/HowToPlayGuide";

class App extends Component {
  state = {
    showUserVsCpu: false,
    showUserVsUser: false,
    showUserGuide: false
  };

  render() {
    const showUserVsCpu = this.state.showUserVsCpu;
    const showUserVsUser = this.state.showUserVsUser;

    return (
      <>
        <div>
          <h1 id="cy-title">Rock, Paper, Scissors</h1>
        </div>
        <div>
          <h2 id="cy-option">Choose game mode</h2>
        </div>

        {!this.state.showUserVsCpu && !this.state.showUserVsUser && (
          <div>
            <button
              id="cy-userCpu"
              onClick={() =>
                this.setState({ showUserVsCpu: !this.state.showUserVsCpu })
              }
            >
              User vs CPU
            </button>
            <button
              id="cy-userUser"
              onClick={() =>
                this.setState({ showUserVsUser: !this.state.showUserVsUser })
              }
            >
              User vs User
            </button>
            <button onClick={() =>
                this.setState({ showUserGuide: !this.state.showUserGuide })
              }>
            HowToPlayGuide 
        </button>
          </div>
        )}
        <div>
          {this.state.showUserVsCpu && (
            <div>
              <UserVsCpu showUserVsCpu={showUserVsCpu} />
            </div>
          )}

          {this.state.showUserVsUser && (
            <div>
              <UserVsUser showUserVsUser={showUserVsUser} />
            </div>
          )}
        {this.state.showUserGuide && (
            <div>
              <HowToPlayGuide />
            </div>
          )}
        </div>
        
        {(this.state.showUserVsCpu || this.state.showUserVsUser) && (
          <button
            onClick={() =>
              this.setState({ showUserVsCpu: false, showUserVsUser: false })
            }
          >
            Restart
          </button>
        )}
      </>
    );
  }
}

export default App;
