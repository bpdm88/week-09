import React from "react";

class RollCall extends React.Component {

    constructor(props) {

        super(props);

        this.state = ({person: 0});
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({person: (this.state.person + 1) % this.props.names.length})
    }

    render() {
        return(
            <div class="jumbotron">
                <button class="btn btn-success" onClick = {this.handleClick}>Next</button>
                <h3>{ this.props.names[this.state.person] }</h3>
            </div>
        )
    }
}

export default RollCall;