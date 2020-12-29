import { connect } from "react-redux";
import PostMatch from "./PostMatch";

let mapStateToProps = (state) => {
    return {
        winner: state.winner,
        motm: state.motm,
        matchInfo: state.matchInfo,
    };
};

export default connect(mapStateToProps)(PostMatch);
