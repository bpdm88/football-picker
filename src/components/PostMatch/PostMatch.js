import React from "react";

class PostMatch extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {}

    render() {
        let { winner, motm, matchInfo } = this.props;

        return (
            <>
                <ul>
                    <li>Man of the Match: {motm}</li>
                    <li>
                        An entertaining game at {matchInfo[2]} saw{" "}
                        {winner === "draw"
                            ? "a competitive draw"
                            : `${winner} get the win today`}
                    </li>
                </ul>
            </>
        );
    }
}

export default PostMatch;
