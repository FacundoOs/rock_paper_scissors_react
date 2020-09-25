import React, { Component } from "react";
import rock from "../assets/rock.png";
import paper from "../assets/paper.jpg";
import scissor from "../assets/scissor.jpg";
import showWinner from "../modules/showWinner";
import { Grid, Image, Button } from "semantic-ui-react";

class UserVsCpu extends Component {
  state = {
    userWeapon: "",
    cpuWeapon: "",
    winner: "",
    userCount: 0,
    cpuCount: 0,
  };

  cpuSelectWeapon = async () => {
    const cpuOptions = ["rock", "paper", "scissor"];
    let count = 0;
    let gameInterval = setInterval(async () => {
      count++;
      this.setState({
        cpuWeapon: cpuOptions[Math.floor(Math.random() * 3)],
      });
      if (count > 8) {
        clearInterval(gameInterval);
        this.setState({
          winner: await showWinner(this.state.userWeapon, this.state.cpuWeapon),
        });
      }
    }, 100);
    if (this.state.winner === "User 1") {
      await this.setState({
        userCount: this.state.userCount + 1,
      });
    } else if (this.state.winner === "User 2") {
      await this.setState({
        cpuCount: this.state.cpuCount + 1,
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
                <Image src={rock} alt="rock" size="small" />
              </button>
            </Grid.Row>
            <Grid.Row width={5}>
              <button
                id="paper"
                onClick={() => this.setState({ userWeapon: "paper" })}
              >
                <Image src={paper} alt="paper" size="small" />
              </button>
            </Grid.Row>
            <Grid.Row width={5}>
              <button
                id="scissors"
                onClick={() => this.setState({ userWeapon: "scissor" })}
              >
                <Image src={scissor} alt="scissor" size="small" />
              </button>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={8} textAlign="center">
            <h2 id="cy-userWeapon">User1 weapon: {this.state.userWeapon}</h2>
            <h2 id="cy-cpuWeapon">Cpu weapon: {this.state.cpuWeapon}</h2>
          </Grid.Column>
          <Grid.Column width={4} textAlign="center">
            <Image id="cy-rock cy-paper cy-scissor"
              src={
                this.state.cpuWeapon === "rock"
                  ? rock
                  : this.state.cpuWeapon === "paper"
                  ? paper
                  : scissor
              }
              alt="rock paper scissor"
              size="small"
              verticalAlign="bottom"
            />
          </Grid.Column>
        </Grid>
        {this.state.userWeapon && (
          <Button
            color="black"
            id="cy-fight"
            onClick={() => this.cpuSelectWeapon()}
          >
            Fight
          </Button>
        )}
        <h2 id="cy-winner">The winner is : {this.state.winner}</h2>
        <h2>User wins: {this.state.userCount}</h2>
        <h2>Cpu wins: {this.state.cpuCount}</h2>
      </div>
    );
  }
}
export default UserVsCpu;
