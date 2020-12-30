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
            <section className="small-card">
                <h2 className="heading-bravo">Team News</h2>
                <h3 className="heading-bravo">{teamName1}</h3>
                <ul>
                    {team1.map((player) => (
                        <li key={player.id}>{player.name}</li>
                    ))}
                </ul>
                <h3 classname="heading-bravo">{teamName2}</h3>
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
