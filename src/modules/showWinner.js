const showWinner = (weapon1, weapon2) => {
  if (weapon1 === weapon2) {
    return "Tie";
  } else if (
    (weapon1 === "rock" && weapon2 === "scissor") ||
    (weapon1 === "paper" && weapon2 === "rock") ||
    (weapon1 === "scissor" && weapon2 === "paper")
  ) {
    return "User 1";
  } else {
    return "User 2";
  }
};

export default showWinner;
