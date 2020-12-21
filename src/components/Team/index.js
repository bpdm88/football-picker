import { connect } from "react-redux";
import Team from "./Team";
import { generate } from "../../data/actions/state";

let mapStateToProps = (state) => {
    return {
        team1: state.team1,
        team2: state.team2,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        handleGenerateTeams: () => dispatch(generate()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Team);
