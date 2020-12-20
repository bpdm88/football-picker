import React from "react";

class PlayerForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
        };

        this.handleName = this.handleName.bind(this);
    }

    handleName(event) {
        this.setState({ name: event.currentTarget.value });
    }

    render() {
        return (
            <>
                <h1>Add Player</h1>
                <form>
                    <label>Name</label>
                    <input onChange={this.handleName}></input>
                    <button>Add Player</button>
                </form>
            </>
        );
    }
}

export default PlayerForm;
