import React from "react";

class Multiplier extends React.Component {
    render() {
        let { x, y } = this.props;

        return (
            <section class="jumbotron">
                <h3>{x * y}</h3>
            </section>
        );
    }
}

export default Multiplier;
