import { connect } from "react-redux";
import TeamForm from "./TeamForm";
import { update } from "../../data/actions/state";

let mapDispatchToProps = (dispatch) => {
    return {
        handleUpdateTeamNames: (data) => dispatch(update(data)),
    };
};

export default connect(null, mapDispatchToProps)(TeamForm);
