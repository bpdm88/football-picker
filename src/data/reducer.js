const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER":
            return addToList(state, action);
        default:
            return state;
    }
};

export default reducer;

const addToList = (state, action) => ({
    ...state,
    players: [...state.players, action.playerName],
});
