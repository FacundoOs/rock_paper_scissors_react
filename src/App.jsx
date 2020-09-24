import React, { Component } from "react";
import UserVsCpu from "./components/UserVsCpu";
import UserVsUser from "./components/UserVsUser";
import HowToPlayGuide from "./components/HowToPlayGuide";
import LoginForm from "./components/LogInForm";
import { authenticate } from "./modules/auth";

class App extends Component {
  state = {
    showUserVsCpu: false,
    showUserVsUser: false,
    showUserGuide: false,
    renderLoginForm: false,
    authenticated: false,
    message: "",
  };

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLogin = async (e) => {
    e.preventDefault();
    const response = await authenticate(
      e.target.email.value,
      e.target.password.value
    );
    if (response.authenticated) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ message: response.message, renderLoginForm: false });
    }
  };

  render() {
    const showUserVsCpu = this.state.showUserVsCpu;
    const showUserVsUser = this.state.showUserVsUser;

    const { renderLoginForm, authenticated, message } = this.state;
    let renderLogin;
    switch (true) {
      case renderLoginForm && !authenticated:
        renderLogin = <LoginForm submitFormHandler={this.onLogin} />;
        break;
      case !renderLoginForm && !authenticated:
        renderLogin = (
          <>
            <button
              id="login"
              onClick={() => this.setState({ renderLoginForm: true })}
            >
              Login
            </button>
            <p id="message">{message}</p>
          </>
        );
        break;
      case authenticated:
        renderLogin = (
          <p id="message">
            Hi {JSON.parse(sessionStorage.getItem("credentials")).uid}
          </p>
        );
        break;
      default:
        break;
    }
    return (
      <>
        {renderLogin}
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
            <button
              onClick={() =>
                this.setState({ showUserGuide: !this.state.showUserGuide })
              }
            >
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
