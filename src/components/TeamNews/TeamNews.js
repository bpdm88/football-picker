import React from "react";

class TeamNews extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleMatchDay();
    }

    render() {
        let { team1, team2, teamName1, teamName2 } = this.props;

        return (
            <section>
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
                <button onClick={this.handleClick}>Get Match Info</button>
            </section>
        );
    }
}

export default TeamNews;
