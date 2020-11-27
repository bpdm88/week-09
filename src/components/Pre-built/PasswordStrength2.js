import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

class PasswordStrength2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleColour = this.handleColour.bind(this);
    }

    handleChange(event) {
        this.setState({ input: event.currentTarget.value });
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
                <Form>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={this.handleChange}
                            value={this.state.input}
                            style={{ background: this.handleColour() }}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </section>
        );
    }
}

export default PasswordStrength2;
