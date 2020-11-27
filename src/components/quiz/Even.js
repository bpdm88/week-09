import React from "react";

class Even extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            number: 0,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ number: this.state.number + 1 });
    }

    render() {
        return (
            <section class="jumbotron">
                <button onClick={this.handleClick} class="btn btn-success">
                    Click Me
                </button>
                <h3>{this.state.number % 2 === 0 ? "Even" : "Odd"}</h3>
            </section>
        );
    }
}

export default Even;
