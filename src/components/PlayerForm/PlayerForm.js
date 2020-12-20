import React from "react";

class PlayerForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
        };
    }

    render() {
        return (
            <>
                <h1>Add Player</h1>
                <form>
                    <label>Name</label>
                    <input></input>
                </form>
            </>
        );
    }
}

export default PlayerForm;
