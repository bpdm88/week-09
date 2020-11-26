import React from "react";

class ToggleText extends React.Component {

    constructor(props) {

        super(props);

        this.state = ({initial: true});
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({initial: !this.state.initial});
    }

    render() {

        const { initial, alternative } = this.props;

        let word = this.state.initial ? initial : alternative; 

        return(
            <div class="jumbotron">
                <button class="btn btn-warning" onClick = {this.handleClick}>Toggle</button>
                <h3>{word}</h3>
            </div>
        )
    }
}

export default ToggleText;