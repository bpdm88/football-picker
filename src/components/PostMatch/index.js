import { connect } from "react-redux";
import PostMatch from "./PostMatch";
import { resetGame } from "../../data/actions/state";

let mapStateToProps = (state) => {
    return {
        gameStarted: state.gameStarted,
        winner: state.winner,
        motm: state.motm,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        reset: () => dispatch(resetGame()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostMatch);
