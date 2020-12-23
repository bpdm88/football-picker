import { connect } from "react-redux";
import Team from "./Team";
import { generate } from "../../data/actions/state";

let mapStateToProps = (state) => {
    return {
        team1: state.team1,
        team2: state.team2,
        teamName1: state.teamName1,
        teamName2: state.teamName2,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        handleGenerateTeams: (data) => dispatch(generate(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Team);
