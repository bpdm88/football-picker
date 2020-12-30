const createScore = (state) => {
    // To calculate the score:
    // Each teams abilites (Attack, Defence, Creativity) is totaled then divided by 5
    // The defence score is then halved & an additonal enhancement is calculated depending on how high the teams creativity is.
    // The number of goals scored is calculated by adding the attack score to the creativity enhancement less the other teams defence score

    // Ability Scores

    let team1 = state.team1;
    let team2 = state.team2;

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

    // Decrease Defense Score

    let decrease = (score) => score / 2;

    // Creativity Enhancement

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

    // Goals Scored

    let team1Score = Math.round(
        attack1 - decrease(defence2) + enhance(creativity1)
    );

    let team2Score = Math.round(
        attack2 - decrease(defence1) + enhance(creativity2)
    );

    // To update Winner in state

    let winner = () => {
        if (team1Score > team2Score) {
            return state.teamName1;
        } else if (team2Score > team1Score) {
            return state.teamName2;
        } else if (team1Score === team2Score) {
            return "draw";
        }
    };

    // Determine who is eligible for man of the match

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
