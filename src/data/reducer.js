const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER":
            return createPlayer(state, action);
        case "GENERATE_TEAMS":
            return createTeams(state, action);
        case "MATCHDAY_INFO":
            return createMatchInfo(state, action);
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

const createMatchInfo = () => {
    const weather = [
        "Sun",
        "Rain",
        "Overcast",
        "Thunderstorms",
        "Cloudy",
        "Heavy Rain",
    ];

    const randomElement = weather[Math.floor(Math.random() * weather.length)];

    console.log(randomElement);
};
