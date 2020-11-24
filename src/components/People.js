import React from "react";

class People extends React.Component {

    handleClick() {
        console.log("hi");
    };

    render() {
        const{ names } = this.props;

        return (
            names ? 
            <ul onClick = { this.handleClick }>
                {names.map((value, index) => (
                    <li key = { index }>{ value }</li>
                ))}
            </ul> 
            : <p>Nothing to see here!</p>  
        )
    }
}


export default People;