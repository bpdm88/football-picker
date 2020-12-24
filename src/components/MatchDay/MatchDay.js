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
        return (
            <section>
                <button onClick={this.handleClick}>Match Day Info</button>
            </section>
        );
    }
}

export default MatchDay;
