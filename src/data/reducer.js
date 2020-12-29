const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER":
            return createPlayer(state, action);
        case "GENERATE_TEAMS":
            return createTeams(state, action);
        case "MATCHDAY_INFO":
            return createMatchInfo(state, action);
        case "GET_RESULT":
            return createScore(state, action);
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
        "Camp Nou",
        "Allianz Arena",
        "San Siro",
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

    // team scores for each ability

    let attackTeam1 = team1.reduce((total, val) => total + val.attack, 0);
    let defenceTeam1 = team1.reduce((total, val) => total + val.defence, 0);
    let createTeam1 = team1.reduce((total, val) => total + val.creativity, 0);

    // let attackTeam2 = team2.reduce((total, val) => total + val.attack, 0);
    // let defenceTeam2 = team2.reduce((total, val) => total + val.defence, 0);
    // let createTeam2 = team2.reduce((total, val) => total + val.creativity, 0);

    let enhancement = (create) => {
        if (create > 5) {
            return 3;
        } else if (create > 4) {
            return 2;
        } else if (create > 3) {
            return 1;
        } else if (create > 2) {
            return 0.5;
        }
    };

    let defence = defenceTeam1 / 5 / 2;
    let attack = attackTeam1 / 5;
    let create = createTeam1 / 5;
    let extra = enhancement(create);

    console.log(defence);
    console.log(attack);
    console.log(extra);
};
