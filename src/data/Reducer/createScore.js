const createScore = (state) => {
    // teams

    let team1 = state.team1;
    let team2 = state.team2;

    // Ability Scores

    let attack1 =
        team1.reduce((total, player) => total + +player.attack, 0) / 5;
    let defence1 =
        team1.reduce((total, player) => total + +player.defence, 0) / 5;
    let creativity1 =
        team1.reduce((total, player) => total + +player.creativity, 0) / 5;

    let attack2 =
        team2.reduce((total, player) => total + +player.attack, 0) / 5;
    let defence2 =
        team2.reduce((total, player) => total + +player.defence, 0) / 5;
    let creativity2 =
        team2.reduce((total, player) => total + +player.creativity, 0) / 5;

    // Decrease defense score

    let decrease = (score) => score / 2;

    // Creativity enhance logic

    let enhance = (score) => {
        if (score >= 5) {
            return 4;
        } else if (score >= 4) {
            return 3;
        } else if (score >= 3) {
            return 2;
        } else if (score >= 2) {
            return 1;
        } else if (score >= 1) {
            return 0.5;
        } else return 0;
    };

    let team1Score = Math.round(
        attack1 - decrease(defence2) + enhance(creativity1)
    );

    let team2Score = Math.round(
        attack2 - decrease(defence1) + enhance(creativity2)
    );

    let winner = () => {
        if (team1Score > team2Score) {
            return state.teamName1;
        } else if (team2Score > team1Score) {
            return state.teamName2;
        } else if (team1Score === team2Score) {
            return "draw";
        }
    };

    let whoWon = () => {
        if (team1Score > team2Score) {
            return state.team1;
        } else if (team2Score > team1Score) {
            return state.team2;
        } else if (team1Score === team2Score) {
            return state.players;
        }
    };

    let motm = whoWon()[Math.floor(Math.random() * whoWon.length)];

    return {
        ...state,
        gameStarted: true,
        team1Goals: team1Score >= 0 ? team1Score : 0,
        team2Goals: team2Score >= 0 ? team2Score : 0,
        winner: winner(),
        motm: motm.name,
    };
};

export default createScore;
