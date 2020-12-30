import initial from "../initial";
import createPlayer from "./createPlayer";
import createTeams from "./createTeams";
import createMatchInfo from "./createMatchInfo";
import createScore from "./createScore";

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER":
            return createPlayer(state, action);
        case "GENERATE_TEAMS":
            return createTeams(state, action);
        case "MATCHDAY_INFO":
            return createMatchInfo(state);
        case "GET_RESULT":
            return createScore(state);
        case "RESET":
            return initial;
        default:
            return state;
    }
};

export default reducer;
