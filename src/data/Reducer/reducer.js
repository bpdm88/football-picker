import initial from "../initial";
import Player from "./createPlayer";
import Squad from "./createSquad";
import Teams from "./createTeams";
import MatchInfo from "./createMatchInfo";
import Score from "./createScore";

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER":
            return Player(state, action);
        case "ADD_SQUAD":
            return Squad(state);
        case "GENERATE_TEAMS":
            return Teams(state, action);
        case "MATCHDAY_INFO":
            return MatchInfo(state);
        case "GET_RESULT":
            return Score(state);
        case "RESET":
            return initial;
        default:
            return state;
    }
};

export default reducer;
