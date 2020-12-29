import { connect } from "react-redux";
import TeamNews from "./TeamNews";
import { getInfo } from "../../data/actions/state";

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
        handleMatchDay: () => dispatch(getInfo()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamNews);
