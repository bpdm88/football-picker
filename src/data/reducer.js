const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER":
            return addToList(state, action);
        case "GENERATE_TEAMS":
            return createTeams(state);
        default:
            return state;
    }
};

export default reducer;

const addToList = (state, action) => ({
    ...state,
    players: [...state.players, action.playerName],
});

const createTeams = (state) => {
    let array = state.players;

    const shuffle = (array) => array.sort(() => 0.5 - Math.random());

    let newArr = shuffle(array);

    let team1 = newArr.slice(0, 4);
    let team2 = newArr.slice(5, 9);

    return {
        ...state,
        team1: team1,
        team2: team2,
    };
};
