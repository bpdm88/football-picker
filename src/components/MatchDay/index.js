import { connect } from "react-redux";
import MatchDay from "./MatchDay";
import { getInfo } from "../../data/actions/state";

let mapDispatchToProps = (dispatch) => {
    return {
        handleMatchDay: () => dispatch(getInfo()),
    };
};

export default connect(null, mapDispatchToProps)(MatchDay);
