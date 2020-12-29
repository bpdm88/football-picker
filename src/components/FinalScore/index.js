import { connect } from "react-redux";
import FinalScore from "./FinalScore";

let mapStateToProps = (state) => {
    return {
        teamName1: state.teamName1,
        teamName2: state.teamName2,
        team1Goals: state.team1Goals,
        team2Goals: state.team2Goals,
    };
};

export default connect(mapStateToProps)(FinalScore);
