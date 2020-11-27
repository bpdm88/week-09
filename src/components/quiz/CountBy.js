import React from "react";

class CountBy extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            steps: 0,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ steps: this.state.steps + this.props.step });
    }

    render() {
        let { steps } = this.state;
        return (
            <section class="jumbotron">
                <button onClick={this.handleClick} class="btn btn-success">
                    Add Steps
                </button>
                <h3>{steps}</h3>
            </section>
        );
    }
}

export default CountBy;
