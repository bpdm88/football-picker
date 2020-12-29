export const add = (data) => {
    return {
        type: "ADD_PLAYER",
        playerName: data.playerName,
        attack: data.attack,
        defence: data.defence,
        creativity: data.creativity,
    };
};

export const generate = (data) => {
    return {
        type: "GENERATE_TEAMS",
        teamOne: data.teamOne,
        teamTwo: data.teamTwo,
    };
};

export const getInfo = () => {
    return {
        type: "MATCHDAY_INFO",
    };
};

export const getResult = () => {
    return {
        type: "GET_RESULT",
    };
};
