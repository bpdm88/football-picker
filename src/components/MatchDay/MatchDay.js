import React from "react";

class MatchDay extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleKickOff();
    }

    render() {
        let { matchInfo } = this.props;
        return (
            <section>
                <h2>Match Day Information</h2>
                <ul>
                    {matchInfo.map((detail) => (
                        <li key={detail.id}>{detail}</li>
                    ))}
                </ul>
                <button onClick={this.handleClick}>Kick Off</button>
            </section>
        );
    }
}

export default MatchDay;
