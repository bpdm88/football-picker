import { connect } from "react-redux";
import PlayerList from "./PlayerList";

let mapStateToProps = (state) => {
    return {
        playerName: state.players,
    };
};

export default connect(mapStateToProps)(PlayerList);
