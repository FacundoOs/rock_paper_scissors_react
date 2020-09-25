import React, { Component } from "react";
import UserVsCpu from "./components/UserVsCpu";
import UserVsUser from "./components/UserVsUser";
import HowToPlayGuide from "./components/HowToPlayGuide";
import LoginForm from "./components/LogInForm";
import { authenticate } from "./modules/auth";
import { Menu, Button, Container, Grid, Card } from "semantic-ui-react";

class App extends Component {
  state = {
    showUserVsCpu: false,
    showUserVsUser: false,
    showUserGuide: false,
    renderLoginForm: false,
    authenticated: false,
    message: "",
    activeItem: "restart",
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
            <Button
              primary
              id="login"
              onClick={() => this.setState({ renderLoginForm: true })}
            >
              {" "}
              Login
            </Button>

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
        <Container>
          <Menu size="small" inverted>
            {(this.state.showUserVsCpu || this.state.showUserVsUser) && (
              <Menu.Item
                name="Restart"
                active={this.state.activeItem === "restart"}
                onClick={() =>
                  this.setState({ showUserVsCpu: false, showUserVsUser: false })
                }
              />
            )}
            <Menu.Menu position="right">
              <Menu.Item
                name="HowToPlayGuide"
                active={this.state.activeItem === "messages"}
                onClick={() =>
                  this.setState({ showUserGuide: !this.state.showUserGuide })
                }
              />
              <Menu.Item>{renderLogin}</Menu.Item>
            </Menu.Menu>
          </Menu>
          <div class="backgroundImage">
            <Grid textAlign="center">
              <h1 id="cy-title"> Rock, Paper, Scissors</h1>
            </Grid>
            <Grid textAlign="center">
              {!this.state.showUserVsCpu &&
                !this.state.showUserVsUser &&
                this.state.authenticated && (
                  <Card>
                    <Card.Content>
                      <Card.Header textAlign="center">
                        {this.state.authenticated && (
                          <h2 id="cy-option">Choose game mode</h2>
                        )}
                      </Card.Header>
                    </Card.Content>

                    <Card.Content extra>
                      <div className="ui two buttons">
                        <Button
                          basic
                          color="green"
                          id="cy-userCpu"
                          onClick={() =>
                            this.setState({
                              showUserVsCpu: !this.state.showUserVsCpu,
                            })
                          }
                        >
                          User vs CPU
                        </Button>
                        <Button
                          basic
                          color="red"
                          id="cy-userUser"
                          onClick={() =>
                            this.setState({
                              showUserVsUser: !this.state.showUserVsUser,
                            })
                          }
                        >
                          User vs User
                        </Button>
                      </div>
                    </Card.Content>
                  </Card>
                )}
            </Grid>
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
            </div>

            {this.state.showUserGuide && (
              <div>
                <HowToPlayGuide />
              </div>
            )}
          </div>
        </Container>
      </>
    );
  }
}
export default App;
