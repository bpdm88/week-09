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
            <div>
                <button onClick = {this.handleClick}>Toggle</button>
                <p>{word}</p>
            </div>
        )
    }
}

export default ToggleText;