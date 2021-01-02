import { connect } from "react-redux";
import MatchDay from "./MatchDay";
import { getResult } from "../../data/actions/state";

let mapStateToProps = (state) => {
    return {
        matchInfo: state.matchInfo,
        teamsSubmitted: state.teamsSubmitted,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        handleKickOff: () => dispatch(getResult()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MatchDay);
