import React, { Component } from "react";
import rock from "../assets/rock.png";
import paper from "../assets/paper.jpg";
import scissor from "../assets/scissor.jpg";

class UserVsCpu extends Component {
  state = {
    userWeapon: "",
  };

  render() {
    const userWeapon = this.state.userWeapon;

    return (
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
        <h2 id="cy-userWeapon">User1 weapon: {userWeapon}</h2>
        {this.props.showUserVsCpu && (
          <div>
            
            
            <div>
              <button id="fight" >
                Fight
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default UserVsCpu;
