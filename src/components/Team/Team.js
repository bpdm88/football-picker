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
        let { teamOne, teamTwo } = this.state;
        let { disabled } = this.props;

        return (
            <section className="small-card">
                <h2 className="heading-bravo">Create Teams</h2>
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
                    <button disabled={disabled}>Generate Teams</button>
                </form>
            </section>
        );
    }
}

export default Team;
