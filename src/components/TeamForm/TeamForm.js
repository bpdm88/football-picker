import React from "react";
import FormField from "../PlayerForm/FormField";

class TeamForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            teamName1: "",
            teamName2: "",
        };

        this.handleChangeTeamName1 = this.handleChangeTeamName1.bind(this);
        this.handleChangeTeamName2 = this.handleChangeTeamName2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeTeamName1(event) {
        this.setState({ teamName1: event.currentTarget.value });
    }

    handleChangeTeamName2(event) {
        this.setState({ teamName2: event.currentTarget.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.handleUpdateTeamNames({ ...this.state });
    }

    render() {
        let { teamName1, teamName2 } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <FormField
                    label="Team Name"
                    name="team-name"
                    type="text"
                    handleChange={this.handleChangeTeamName1}
                    value={teamName1}
                />
                <FormField
                    label="Team Name"
                    name="team-name"
                    type="text"
                    handleChange={this.handleChangeTeamName2}
                    value={teamName2}
                />
                <button onSubmit={this.handleSubmit}>Add Team Names</button>
            </form>
        );
    }
}

export default TeamForm;
