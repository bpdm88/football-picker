import initial from "../initial";

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER":
            return createPlayer(state, action);
        case "GENERATE_TEAMS":
            return createTeams(state, action);
        case "MATCHDAY_INFO":
            return createMatchInfo(state);
        case "GET_RESULT":
            return createScore(state);
        case "RESET":
            return initial;
        default:
            return state;
    }
};

export default reducer;

const createPlayer = (state, action) => ({
    ...state,
    players: [
        ...state.players,
        {
            name: action.playerName,
            attack: action.attack,
            defence: action.defence,
            creativity: action.creativity,
        },
    ],
});

const createTeams = (state, action) => {
    let array = state.players;

    const shuffle = (array) => array.sort(() => 0.5 - Math.random());

    let newArr = shuffle(array);

    let team1 = newArr.slice(0, 5);
    let team2 = newArr.slice(5, 10);

    return {
        ...state,
        team1: team1,
        team2: team2,
        teamName1: action.teamOne,
        teamName2: action.teamTwo,
    };
};

const createMatchInfo = (state) => {
    const weather = [
        "Sunny",
        "Rain",
        "Overcast",
        "Thunderstorms",
        "Cloudy",
        "Heavy Rain",
    ];

    const stadium = [
        "Wembly",
        "Old Trafford",
        "St James' Park",
        "Stamford Bridge",
        "Ashton Gate",
        "White Hart Lane",
    ];

    const referee = [
        "Howard Webb",
        "Graham Poll",
        "Mark Clattenburg",
        "Mike Dean",
        "Andre Marriner",
        "Pierluigi Collina",
    ];

    const weatherInfo = weather[Math.floor(Math.random() * weather.length)];
    const stadiumInfo = stadium[Math.floor(Math.random() * stadium.length)];
    const refereeInfo = referee[Math.floor(Math.random() * referee.length)];
    let today = new Date().toLocaleDateString();

    const matchInfo = [today, weatherInfo, stadiumInfo, refereeInfo];

    return {
        ...state,
        matchInfo: matchInfo,
    };
};

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
