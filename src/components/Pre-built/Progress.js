import React from "react";
import { Button, ProgressBar } from "react-bootstrap";

class Progress extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            progress: 0,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        if (this.state.progress < 100) {
            this.setState({progress: this.state.progress + 10})
        }
    }

    render() {
        const { progress } = this.state;
        return(
            <section class="jumbotron">
                <ProgressBar animated now={ progress } />
                <Button onClick={this.handleChange} variant="primary">More!</Button>{' '}
            </section>  
        )
    }
}

export default Progress;