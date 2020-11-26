import React from "react";

class People extends React.Component {

    handleClick() {
        console.log("hi");
    };

    render() {
        const{ names } = this.props;

        return (
            names ? 
            <ul class="jumbotron" onClick = { this.handleClick }>
                {names.map((value, index) => (
                    <li class="list-group-item" key = { index }>{ value }</li>
                ))}
            </ul> 
            : <p>Nothing to see here!</p>  
        )
    }
}


export default People;