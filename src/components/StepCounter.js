import React from "react";

class StepCounter extends React.Component {

    constructor(props) {

        super(props);

        this.state = ({counter: 0});
        this.handleClickPlus = this.handleClickPlus.bind(this);
        this.handleClickMinus = this.handleClickMinus.bind(this)
    }

    handleClickPlus() {
        if (this.state.counter < this.props.max) {
            this.setState({counter: this.state.counter + this.props.steps})
        } 
    }

    handleClickMinus () {
        if (this.state.counter > 0) {
            this.setState({counter: this.state.counter - this.props.steps})
        }
    }

    render() {

        const { counter } = this.state;

        return(
            <section class="jumbotron">
                <button class="btn btn-success" onClick = {this.handleClickPlus}>Plus</button>
                <button class="btn btn-danger" onClick = {this.handleClickMinus}>Minus</button>
                <h3>{ counter }</h3>
            </section>
        )
    }
}

export default StepCounter;