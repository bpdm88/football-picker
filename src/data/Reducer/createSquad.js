const createSquad = (state) => {
    const players = [
        { name: "Alan Shearer", attack: 5, defence: 2, creativity: 3 },
    ];

    return {
        ...state,
        players: players,
    };
};

export default createSquad;
