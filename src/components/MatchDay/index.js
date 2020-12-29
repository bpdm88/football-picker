import { connect } from "react-redux";
import MatchDay from "./MatchDay";

let mapStateToProps = (state) => {
    return {
        matchInfo: state.matchInfo,
    };
};

export default connect(mapStateToProps)(MatchDay);
