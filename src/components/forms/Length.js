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
           <section>
               <form>
                   <input onChange={this.handleChange }value={this.state.input}/>
               </form>
               <p>Length: { this.state.input.length } </p>
           </section>
       ) 
    }
}

export default Length;