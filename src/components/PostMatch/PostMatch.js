import React from "react";

class PostMatch extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.reset();
    }

    render() {
        let { gameStarted, winner, motm } = this.props;

        return (
            <section className="small-card">
                <h2 className="heading-bravo">Post Match Report</h2>
                <div className="content">
                    {!gameStarted ? null : (
                        <ul>
                            <li>
                                Man of the Match:{" "}
                                <span style={{ color: "var(--green)" }}>
                                    {motm}
                                </span>
                            </li>
                            <li>
                                An entertaining game between the two sides saw{" "}
                                {winner === "draw"
                                    ? "a competitive draw"
                                    : `${winner} get the win today`}
                            </li>
                            <li>Click the reset button to start again</li>
                        </ul>
                    )}
                </div>
                <button onClick={this.handleClick} className="secondary-button">
                    Reset
                </button>
            </section>
        );
    }
}

export default PostMatch;
