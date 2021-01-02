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
    listComplete: state.players.length === 9,
});

export default createPlayer;
