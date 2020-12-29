import React from "react";

class MatchDay extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { matchInfo } = this.props;
        return (
            <section>
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
