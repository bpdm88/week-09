import React from "react";

class Clicked extends React.Component {

    constructor() {

        super();

        this.state = {clicked: false};
        this.handleClick = this.handleClick.bind(this);

    }
        
    handleClick() {
            this.setState({clicked: true});
        }

        
    render() {
            return(
                <div class="jumbotron">
                <h3 onClick = {this.handleClick}>{this.state.clicked ? "Clicked" : "Not Clicked!"}</h3>
                </div>
            );
        }  
}

export default Clicked;