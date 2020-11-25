import React from "react";

class GodCounter extends React.Component {

    constructor(props) {

        super(props);

        this.state = ({counter: 0});
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        window.addEventListener("click", this.handleClick);
    }

    componentWillUnmount() {
        window.removeEventListener("click", this.handleClick);
    }

    handleClick() {
        this.setState({ counter: this.state.counter + 1})
    }

    render() {

        const { counter } = this.state;
        
        return(
            <div>
                <p>{ counter }</p>
            </div>
        )
    }
}

export default GodCounter;