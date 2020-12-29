import React from "react";

class PostMatch extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {}

    render() {
        let { gameStarted, winner, motm, matchInfo } = this.props;

        return (
            <section>
                {!gameStarted ? null : (
                    <ul>
                        <li>Man of the Match: {motm}</li>
                        <li>
                            An entertaining game at {matchInfo[2]} saw{" "}
                            {winner === "draw"
                                ? "a competitive draw"
                                : `${winner} get the win today`}
                        </li>
                        <li>Click the reset button to start again</li>
                    </ul>
                )}
            </section>
        );
    }
}

export default PostMatch;
