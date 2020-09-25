import React, { Component } from "react";
import rock from "../assets/rock.png";
import paper from "../assets/paper.jpg";
import scissor from "../assets/scissor.jpg";
import showWinner from "../modules/showWinner";
import { Grid, Image, Button } from "semantic-ui-react";

class UserVsUser extends Component {
  state = {
    userWeapon: "",
    user2Weapon: "",
    winner: "",
    user1Count: 0,
    user2Count: 0,
  };

  userVsUser = async () => {
    let winner = await showWinner(
      this.state.userWeapon,
      this.state.user2Weapon
    );
    this.setState({
      winner: winner,
    });
    if (this.state.winner === "User 1") {
      await this.setState({
        user1Count: this.state.user1Count + 1,
      });
    } else if (this.state.winner === "User 2") {
      await this.setState({
        user2Count: this.state.user2Count + 1,
      });
    }
  };

  render() {
    return (
      <div>
        <Grid celled>
          <Grid.Column width={4} textAlign="center">
            <Grid.Row width={5}>
              <button
                id="rock"
                onClick={() => this.setState({ userWeapon: "rock" })}
              >
                <img src={rock} alt="rock" width="100px" />
              </button>
            </Grid.Row>
            <Grid.Row width={5}>
              <button
                id="paper"
                onClick={() => this.setState({ userWeapon: "paper" })}
              >
                <img src={paper} alt="paper" width="100px" />
              </button>
            </Grid.Row>
            <Grid.Row width={5}>
              <button
                id="scissors"
                onClick={() => this.setState({ userWeapon: "scissor" })}
              >
                <img src={scissor} alt="scissor" width="100px" />
              </button>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={8} textAlign="center">
            <h2 id="cy-userWeapon">User1 weapon: {this.state.userWeapon}</h2>
            <h2 id="cy-user2Weapon">User2 weapon: {this.state.user2Weapon}</h2>
          </Grid.Column>
          <Grid.Column width={4} textAlign="center">
            <Grid.Row width={5}>
              <button
                id="rock"
                onClick={() => this.setState({ user2Weapon: "rock" })}
              >
                <img src={rock} alt="rock" width="100px" />
              </button>
            </Grid.Row>
            <Grid.Row width={5}>
              <button
                id="paper"
                onClick={() => this.setState({ user2Weapon: "paper" })}
              >
                <img src={paper} alt="paper" width="100px" />
              </button>
            </Grid.Row>
            <Grid.Row width={5}>
              <button
                id="scissors"
                onClick={() => this.setState({ user2Weapon: "scissor" })}
              >
                <img src={scissor} alt="scissor" width="100px" />
              </button>
            </Grid.Row>
          </Grid.Column>
        </Grid>

        <div>
          {this.state.userWeapon && this.state.user2Weapon && (
            <Button
              color="black"
              id="cy-fight"
              onClick={() => this.userVsUser()}
            >
              Fight
            </Button>
          )}
        </div>
        <h2 id="cy-winner">The winner is: {this.state.winner}</h2>
        <h2>User 1 wins: {this.state.user1Count}</h2>
        <h2>User 2 wins: {this.state.user2Count}</h2>
      </div>
    );
  }
}
export default UserVsUser;
