const team = {
  _players: [
    {
      firstName: "Maria",
      lastName: "Martinez",
      age: 22,
    },
  ],
  _games: [
    {
      opponent: 2,
      teamPoints: 10,
      opponentPoints: 6,
    },
  ],

  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },

  addPlayer(newFirstName, lastName, age) {
    this._players.push({
      firstName: newFirstName,
      lastName: lastName,
      age: age,
    });
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    this._games.push({
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    });
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    this._games.push({
      opponent: "José",
      teamPoints: 12,
      opponentPoints: 8,
    });
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this._games.push(game);
  },
};
team.addGame("Titans", 100, 98);
team.addPlayer("Bugs", "Bunny", 76);
console.log(team._players);
console.log(team._games);
