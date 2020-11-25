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
                <p onClick = {this.handleClick}>{this.state.clicked ? "Clicked" : "Not Clicked!"}</p>
            );
        }  
}

export default Clicked;