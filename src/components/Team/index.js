import { connect } from "react-redux";
import Team from "./Team";
import { generate } from "../../data/actions/state";

let mapDispatchToProps = (dispatch) => {
    return {
        handleGenerateTeams: (data) => dispatch(generate(data)),
    };
};

export default connect(null, mapDispatchToProps)(Team);
