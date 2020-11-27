import React from "react";

class MinimumLength extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: "",
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ characters: event.currentTarget.value });
    }

    render() {
        return (
            <section class="jumbotron">
                <form class="form-group">
                    <label for="word">Word:</label>
                    <input
                        id="word"
                        class="form-control"
                        onChange={this.handleChange}
                        value={this.state.characters}
                    />
                </form>
                {this.state.characters.length < 30 ? (
                    <div class="alert alert-danger" role="alert">
                        This word is not long enough, it should be at least 30
                        characters!
                    </div>
                ) : null}
            </section>
        );
    }
}

export default MinimumLength;
