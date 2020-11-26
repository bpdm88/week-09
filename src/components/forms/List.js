import React from "react";

class list extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            item: "", 
            list: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let item = event.currentTarget.value;

        this.setState({item: item})
    }

    handleSubmit(event) {

        event.preventDefault();

        let item = this.state.item;

        this.setState({list:[item, ...this.state.list]});
    }

    render() {

        const { item, list } = this.state; 

        return(
            <section>
                <form onSubmit={this.handleSubmit}> 
                    <label for="item">Item</label>
                    <input id="item" onChange={this.handleChange} value={ item }/>
                    <button>Add To list</button>
                    <ul>{list.map((value, index) => (
                        <li key = { index }>{ value }</li>
                    ))}</ul>
                </form>
            </section>
        )
    }
}

export default list;