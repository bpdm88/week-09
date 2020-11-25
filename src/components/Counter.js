import React, {Fragment} from "react";

class Counter extends React.Component {

    constructor(props) {

        super(props);

        this.state = ({counter: this.props.initial});
        this.handleClickPlus = this.handleClickPlus.bind(this);
        this.handleClickMinus = this.handleClickMinus.bind(this);
    }

    handleClickPlus() {
        if (this.state.counter < this.props.max) {
            this.setState({counter: this.state.counter + 1})
        } 
    }

    handleClickMinus () {
        if (this.state.counter > 0) {
            this.setState({counter: this.state.counter - 1})
        }
    }

    render() {

        const { counter } = this.state;

        return(
            <Fragment>
                <button onClick = {this.handleClickPlus}>+</button>
                <button onClick = {this.handleClickMinus}>-</button>
                <p>{ counter }</p>
            </Fragment>
        )
    }
}

export default Counter;