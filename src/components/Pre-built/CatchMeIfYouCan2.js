import React from "react";
import { Button } from "react-bootstrap";

class CatchMeIfYouCan2 extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            margin:0,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({margin: this.state.margin + this.props.jump});
    }

    render() {
        return (
            <section class = "jumbotron">
                <Button onClick ={this.handleClick} style = {{marginTop: this.state.margin}}variant="success">Jump</Button>
            </section>
        )
    }
}

export default CatchMeIfYouCan2;