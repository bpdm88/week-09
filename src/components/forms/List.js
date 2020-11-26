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
            <section class="jumbotron">
                <form class="form-group" onSubmit={this.handleSubmit}> 
                    <label for="item">Item</label>
                    <input class="form-control" id="item" onChange={this.handleChange} value={ item }/>
                    <button class="btn btn-success">Add To list</button>
                    <ul class="list-group">{list.map((value, index) => (
                        <li class="list-group-item" key = { index }>{ value }</li>
                    ))}</ul>
                </form>
            </section>
        )
    }
}

export default list;