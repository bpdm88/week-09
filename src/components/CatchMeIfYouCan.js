import React from "react";

class CatchMeIfYouCan extends React.Component {

    constructor(props) {

        super(props);

        this.state = ({margin: 0});
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({margin: this.state.margin + this.props.jump})
    }

    render() {
        return (
            <button onClick = {this.handleClick} style={{marginTop: this.state.margin }}>Click</button>
        )
    }
}

export default CatchMeIfYouCan;