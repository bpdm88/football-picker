import { connect } from "react-redux";
import Team from "./Team";
import { generate } from "../../data/actions/state";

let mapStateToProps = (state) => {
    return {
        disabled: state.teamsSubmitted,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        handleGenerateTeams: (data) => dispatch(generate(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Team);
