import React from "react";

class Length extends React.Component {

    constructor(props) {

        super(props);

        this.state = {input: ""};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({input: event.currentTarget.value})
    }

    render() {
       return (
           <section class="jumbotron">
               <form class="form-group">
                   <input class="form-control" onChange={this.handleChange }value={this.state.input}/>
               </form>
               <h3>Length: { this.state.input.length } </h3>
           </section>
       ) 
    }
}

export default Length;