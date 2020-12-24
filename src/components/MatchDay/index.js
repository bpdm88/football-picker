import { connect } from "react-redux";
import MatchDay from "./MatchDay";
import { getInfo } from "../../data/actions/state";

let mapStateToProps = (state) => {
    return {
        matchInfo: state.matchInfo,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        handleMatchDay: () => dispatch(getInfo()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MatchDay);
