import React from "react";

class PlayerForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playerName: "",
            attack: 2,
        };

        this.handleChangePlayerName = this.handleChangePlayerName.bind(this);
        this.handleChangeAttack = this.handleChangeAttack.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangePlayerName(event) {
        this.setState({ playerName: event.currentTarget.value });
    }

    handleChangeAttack(event) {
        this.setState({ attack: event.currentTarget.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.handleAddPlayer({ ...this.state });
    }

    render() {
        let { playerName, attack } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="player-name">Player</label>
                <input
                    id="player-name"
                    onChange={this.handleChangePlayerName}
                    value={playerName}
                />
                <label htmlFor="attack-skill">Attack Skill</label>
                <input
                    id="attack-skill"
                    type="range"
                    min="0"
                    max="5"
                    onChange={this.handleChangeAttack}
                    value={attack}
                />
                <button>Add Player</button>
            </form>
        );
    }
}

export default PlayerForm;
