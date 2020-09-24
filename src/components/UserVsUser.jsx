import React, { Component } from "react";
import rock from "../assets/rock.png";
import paper from "../assets/paper.jpg";
import scissor from "../assets/scissor.jpg";
import showWinner from "../modules/showWinner";

class UserVsUser extends Component {
  state = {
    userWeapon: "",
    user2Weapon: "",
    winner: "",
  };

  userVsUser = async () => {
    let winner = await showWinner(
      this.state.userWeapon,
      this.state.user2Weapon
    );
    this.setState({
      winner: winner,
    });
  };

  render() {
    return (
      <div>
        <div>
          <button
            id="rock"
            onClick={() => this.setState({ userWeapon: "rock" })}
          >
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
        </div>
        <h2 id="cy-userWeapon">User1 weapon: {this.state.userWeapon}</h2>
        <div>
          <div>
            <button
              id="rock"
              onClick={() => this.setState({ user2Weapon: "rock" })}
            >
              <img src={rock} alt="rock" width="100px" />
            </button>
            <button
              id="paper"
              onClick={() => this.setState({ user2Weapon: "paper" })}
            >
              <img src={paper} alt="paper" width="100px" />
            </button>
            <button
              id="scissors"
              onClick={() => this.setState({ user2Weapon: "scissor" })}
            >
              <img src={scissor} alt="scissor" width="100px" />
            </button>
            <h2 id="cy-user2Weapon">User2 weapon: {this.state.user2Weapon}</h2>
            <div>
              {this.state.userWeapon && this.state.user2Weapon && (
                <button id="cy-fight" onClick={() => this.userVsUser()}>
                  Fight
                </button>
              )}
            </div>
            <h2 id="cy-winner">The winner is: {this.state.winner}</h2>
          </div>
        </div>
      </div>
    );
  }
}
export default UserVsUser;
