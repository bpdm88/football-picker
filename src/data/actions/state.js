export const add = (data) => {
    return {
        type: "ADD_PLAYER",
        playerName: data.playerName,
        attack: data.attack,
        defence: data.defence,
        creativity: data.creativity,
    };
};

export const generate = () => {
    return {
        type: "GENERATE_TEAMS",
    };
};

export const update = (data) => {
    return {
        type: "UPDATE_TEAM_NAMES",
        teamName1: data.teamName1,
        teamName2: data.teamName2,
    };
};
