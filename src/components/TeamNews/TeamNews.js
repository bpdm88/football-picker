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
                <div className="content">
                    <div className="teams">
                        <h3 className="heading-delta">{teamName1}</h3>
                        <h3 className="heading-delta">{teamName2}</h3>
                    </div>
                    <div className="line-ups">
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
                    </div>
                </div>
                <button onClick={this.handleClick} className="primary-button">
                    Match Info
                </button>
            </section>
        );
    }
}

export default TeamNews;
