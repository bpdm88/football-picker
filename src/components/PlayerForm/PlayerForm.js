import React from "react";
import FormField from "./FormField";

class PlayerForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playerName: "",
            attack: 2,
            defence: 2,
            creativity: 2,
        };

        this.handleChangePlayerName = this.handleChangePlayerName.bind(this);
        this.handleChangeAttack = this.handleChangeAttack.bind(this);
        this.handleChangeDefence = this.handleChangeDefence.bind(this);
        this.handleChangeCreativity = this.handleChangeCreativity.bind(this);
        this.handleAutomate = this.handleAutomate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangePlayerName(event) {
        this.setState({ playerName: event.currentTarget.value });
    }

    handleChangeAttack(event) {
        this.setState({ attack: event.currentTarget.value });
    }

    handleChangeDefence(event) {
        this.setState({ defence: event.currentTarget.value });
    }

    handleChangeCreativity(event) {
        this.setState({ creativity: event.currentTarget.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.handleAddPlayer({ ...this.state });

        this.setState({
            playerName: "",
            attack: 2,
            defence: 2,
            creativity: 2,
        });
    }

    handleAutomate() {
        let skill = (max) => Math.floor(Math.random() * Math.floor(max));

        let autoAttack = skill(5);
        let autoDefence = skill(5);
        let autoCreativity = skill(5);

        this.setState({ attack: autoAttack });
        this.setState({ defence: autoDefence });
        this.setState({ creativity: autoCreativity });
    }

    render() {
        let { playerName, attack, defence, creativity } = this.state;
        let { disabled } = this.props;

        return (
            <section className="small-card">
                <h2 className="heading-bravo">Create Players</h2>
                <form onSubmit={this.handleSubmit}>
                    <FormField
                        label="Name"
                        name="Name"
                        type="text"
                        handleChange={this.handleChangePlayerName}
                        value={playerName}
                    />
                    <FormField
                        label="Attack Skill"
                        name="Attack-Skill"
                        type="range"
                        min="0"
                        max="5"
                        handleChange={this.handleChangeAttack}
                        value={attack}
                    />
                    <FormField
                        label="Defence Skill"
                        name="Defence-Skill"
                        type="range"
                        min="0"
                        max="5"
                        handleChange={this.handleChangeDefence}
                        value={defence}
                    />
                    <FormField
                        label="Creativity Skill"
                        name="Creativity-Skill"
                        type="range"
                        min="0"
                        max="5"
                        handleChange={this.handleChangeCreativity}
                        value={creativity}
                    />
                    <button disabled={disabled} className="primary-button">
                        Add Player
                    </button>
                    <button
                        type="button"
                        onClick={this.handleAutomate}
                        className="primary-button"
                    >
                        Auto Skill
                    </button>
                </form>
            </section>
        );
    }
}

export default PlayerForm;
