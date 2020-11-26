import React from "react";

class PasswordStrength extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            input: ""
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleColour = this.handleColour.bind(this);
    }

    handleChange(event) {
        this.setState({input: event.currentTarget.value})
    }

    handleColour() {
        let length = this.state.input.length;

        if (length >= 16) {
            return "green";
        } else if (length >= 9) {
            return "orange";
        } else if (length > 0) {
            return "red";
        } else return "";
    }

    render() {
        return (
            <section class="jumbotron">
                <form class="form-group">
                    <input class="form-control" onChange={this.handleChange} value={this.state.input} style={{background: this.handleColour()}}/>
                </form>
            </section>
        )
    }
}

export default PasswordStrength;