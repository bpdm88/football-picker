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
            <section className="small-card">
                <h2 className="heading-bravo">Match Day Information</h2>
                <div className="content">
                    <ul>
                        {matchInfo.map((detail) => (
                            <li key={detail.id}>{detail}</li>
                        ))}
                    </ul>
                </div>
                <button onClick={this.handleClick} className="primary-button">
                    Kick Off
                </button>
            </section>
        );
    }
}

export default MatchDay;
