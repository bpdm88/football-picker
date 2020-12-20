export const add = (data) => {
    return {
        type: "ADD_PLAYER",
        playerName: data.playerName,
    };
};
