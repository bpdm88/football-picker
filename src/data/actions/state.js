export const add = (data) => {
    return {
        type: "ADD_PLAYER",
        playerName: data.playerName,
    };
};

export const generate = () => {
    return {
        type: "GENERATE_TEAMS",
    };
};
