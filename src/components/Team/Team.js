import React from "react";

class Team extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleGenerateTeams();
    }

    render() {
        let { team1, team2 } = this.props;

        return (
            <section>
                <button onClick={this.handleClick}>Generate Teams</button>
                <ul>
                    {team1.map((player) => (
                        <li key={player.id}>{player.name}</li>
                    ))}
                </ul>
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
