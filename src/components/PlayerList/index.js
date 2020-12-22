import { connect } from "react-redux";
import PlayerList from "./PlayerList";

let mapStateToProps = (state) => {
    return {
        players: state.players,
    };
};

export default connect(mapStateToProps)(PlayerList);
