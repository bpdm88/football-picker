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

const createTeams = () => {
    console.log("hello");
};
