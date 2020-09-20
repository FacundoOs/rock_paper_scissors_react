//import logo from "./logo.svg";
import "./App.css";
//import User from "./components/UserCreate";
import rock from "./assets/rock.png";
import paper from "./assets/paper.jpg";
import scissor from "./assets/scissor.jpg";
import React, { Component } from "react";
import Weapon from "./components/Weapon";

class App extends Component {
  state = {
    user_weapon: "",
    cpu_weapon: ["rock", "paper", "scissor"],
    winner: "",
    algo: ["algo1", "algo2", "algo3"]
  };

  selectWeapon = (weapon) => {
    this.setState({
      user_weapon: weapon,
    });
  };

  CPUselectWeapon = () => {
   // const cpu_weapon = this.state.cpu_weapon;
    const number = Math.floor(Math.random() * 3);
    //this.setState ({
    //  cpu_weapon: number
    //})
    this.fightStart(number);
  };

  fightStart = (number) => {
    const user_weapon = this.state.user_weapon;
    //0 = rock, 1 = paper, 2 = scissor
    this.setState({
      cpu_weapon: number,
    });
    if (
      (user_weapon === "rock" && number === 0) ||
      (user_weapon === "paper" && number === 1) ||
      (user_weapon === "scissor" && number === 2)
    ) {
      this.setState({
        winner: "empate",
      });
    } else if (
      ((user_weapon === "rock" && number === 2) ||
      (user_weapon === "paper" && number === 0) ||
      (user_weapon === "scissor" && number === 1))
    ) {
      this.setState({
        winner: "User"
      });
    } else {
      this.setState({
        winner: "CPU"
      });
    }
  };

  render() {
    const user_weapon = this.state.user_weapon;
    const cpu_weapon = this.state.cpu_weapon;
    const winner = this.state.winner;
    const algo = this.state.algo
    return (
      <>
        <div>Rock, paper, scissors</div>
        <div>
          <button id="User1">User1</button>
        </div>
        <div>
          <button id="rock" onClick={() => this.selectWeapon("rock")}>
            <img src={rock} alt="rock" width="100px" />
          </button>
          <button id="paper" onClick={() => this.selectWeapon("paper")}>
            <img src={paper} alt="paper" width="100px" />
          </button>

          <button id="scissors" onClick={() => this.selectWeapon("scissor")}>
            <img src={scissor} alt="scissor" width="100px" />
          </button>
        </div>
        <div>{user_weapon}</div>

        <div>
          <button id="fight" onClick={() => this.CPUselectWeapon()}>
            Fight
          </button>
          <div>{cpu_weapon}</div>
          <div> <img src={ cpu_weapon === 0 ? rock : cpu_weapon === 1 ? paper : scissor}  
      alt="rock paper scissor" width="100px"/></div>

          <div>{winner}</div>
          < Weapon algo={algo}/>
        </div>
      </>
    );
  }
}

export default App;
