import { connect } from "react-redux";
import PlayerForm from "./PlayerForm";
import { add } from "../../data/actions/state";

let mapStateToProps = (state) => {
    return {
        disabled: state.players.length >= 10,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        handleAddPlayer: (data) => dispatch(add(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerForm);
