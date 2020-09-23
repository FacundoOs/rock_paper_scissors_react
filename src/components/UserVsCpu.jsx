import React, { Component } from "react";
import rock from "../assets/rock.png";
import paper from "../assets/paper.jpg";
import scissor from "../assets/scissor.jpg";
import showWinner from "../modules/showWinner";

class UserVsCpu extends Component {
  state = {
    userWeapon: "",
    cpuWeapon: "",
    winner: "",
  };

  cpuSelectWeapon = async () => {
    const cpuOptions = ["rock", "paper", "scissor"];
    let cpu = cpuOptions[Math.floor(Math.random() * 3)];
    let winner = await showWinner(this.state.userWeapon, cpu);
    this.setState({
      cpuWeapon: cpu,
      winner: winner,
    });
  };

  render() {
    return (
      <div>
        <button id="rock" onClick={() => this.setState({ userWeapon: "rock" })}>
          <img src={rock} alt="rock" width="100px" />
        </button>
        <button
          id="paper"
          onClick={() => this.setState({ userWeapon: "paper" })}
        >
          <img src={paper} alt="paper" width="100px" />
        </button>
        <button
          id="scissors"
          onClick={() => this.setState({ userWeapon: "scissor" })}
        >
          <img src={scissor} alt="scissor" width="100px" />
        </button>
        <h2 id="cy-userWeapon">User1 weapon: {this.state.userWeapon}</h2>
        <div>
          <img
            src={
              this.state.cpuWeapon === "rock"
                ? rock
                : this.state.cpuWeapon === "paper"
                ? paper
                : scissor
            }
            alt="rock paper scissor"
            width="100px"
          />
          <h2 id="cy-cpuWeapon">Cpu weapon: {this.state.cpuWeapon}</h2>

          <div>
            <button id="cy-fight" onClick={() => this.cpuSelectWeapon()}>
              Fight
            </button>
          </div>
          <h2 id="cy-winner">The winner is : {this.state.winner}</h2>
        </div>
      </div>
    );
  }
}
export default UserVsCpu;
