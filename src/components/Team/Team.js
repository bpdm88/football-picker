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
        return (
            <section>
                <button onClick={this.handleClick}>Generate Teams</button>
            </section>
        );
    }
}

export default Team;
