import React from "react";

class MatchDay extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleMatchDay();
    }

    render() {
        let { matchInfo } = this.props;
        return (
            <section>
                <button onClick={this.handleClick}>Match Day Info</button>
                <ul>
                    {matchInfo.map((detail) => (
                        <li key={detail.id}>{detail}</li>
                    ))}
                </ul>
            </section>
        );
    }
}

export default MatchDay;
