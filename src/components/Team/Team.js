import React from "react";
import FormField from "../PlayerForm/FormField";

class Team extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            teamOne: "",
            teamTwo: "",
        };

        this.handleChangeTeamName1 = this.handleChangeTeamName1.bind(this);
        this.handleChangeTeamName2 = this.handleChangeTeamName2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeTeamName1(event) {
        this.setState({ teamOne: event.currentTarget.value });
    }

    handleChangeTeamName2(event) {
        this.setState({ teamTwo: event.currentTarget.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.handleGenerateTeams({ ...this.state });
    }

    render() {
        let { team1, team2, teamName1, teamName2 } = this.props;
        let { teamOne, teamTwo } = this.state;

        return (
            <section>
                <form onSubmit={this.handleSubmit}>
                    <FormField
                        label="Team Name 1:"
                        name="team-name"
                        type="text"
                        handleChange={this.handleChangeTeamName1}
                        value={teamOne}
                    />
                    <FormField
                        label="Team Name 2:"
                        name="team-name"
                        type="text"
                        handleChange={this.handleChangeTeamName2}
                        value={teamTwo}
                    />
                    <button>Generate Teams</button>
                </form>

                <h2>{teamName1}</h2>
                <ul>
                    {team1.map((player) => (
                        <li key={player.id}>{player.name}</li>
                    ))}
                </ul>
                <h2>{teamName2}</h2>
                <ul>
                    {team2.map((player) => (
                        <li key={player.id}>{player.name}</li>
                    ))}
                </ul>
            </section>
        );
    }
}

export default Team;
