import React from "react";

class HideMe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: true,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ text: !this.state.text });
    }

    render() {
        const { children } = this.props;
        return (
            <section onClick={this.handleClick} class="jumbotron">
                {this.state.text ? <h3>{children}</h3> : null}
            </section>
        );
    }
}

export default HideMe;
