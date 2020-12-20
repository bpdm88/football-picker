import { connect } from "react-redux";
import PlayerForm from "./PlayerForm";
import { add } from "../../data/actions/state";

let mapDispatchToProps = (dispatch) => {
    return {
        handleAddPlayer: (data) => dispatch(add(data)),
    };
};

export default connect(null, mapDispatchToProps)(PlayerForm);
