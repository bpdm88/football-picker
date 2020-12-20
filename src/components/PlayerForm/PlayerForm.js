import React from "react";

class PlayerForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playerName: "",
        };

        this.handleChangePlayerName = this.handleChangePlayerName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangePlayerName(event) {
        this.setState({ playerName: event.currentTarget.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.handleAddPlayer({ ...this.state });
    }

    render() {
        let { playerName } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="player-name">Player</label>
                <input
                    id="player-name"
                    onChange={this.handleChangePlayerName}
                    value={playerName}
                />
                <button>Add Player</button>
            </form>
        );
    }
}

export default PlayerForm;
