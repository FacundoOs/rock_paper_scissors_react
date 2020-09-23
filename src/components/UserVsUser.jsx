import React, { Component } from "react";
import rock from "../assets/rock.png";
import paper from "../assets/paper.jpg";
import scissor from "../assets/scissor.jpg";

class UserVsUser extends Component {
  state = {
    userWeapon: "",
    user2Weapon: "",
  };
  render() {
    const userWeapon = this.state.userWeapon;
    const user2Weapon = this.state.user2Weapon;

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
        <h2 id="cy-userWeapon">User1 weapon: {userWeapon}</h2>
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
            <h2 id="cy-user2Weapon">User2 weapon: {user2Weapon}</h2>

            <div>
              <button id="fight" onClick={() => this.userVsUser()}>
                Fight
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserVsUser;
