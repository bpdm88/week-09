import React from "react";

class Square extends React.Component {

    constructor(props) {

        super(props);

        this.state = ({default: false});
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({default: !this.state.default});
    }

    render() {
        
        let colour = this.state.default ? this.props.colour : 'green';

        return (
            <div onClick = {this.handleClick} style={{
                background: colour,
                width: 200,
                height: 200,
            }} />
        );
    }
}






// Square.defaultProps = {
//     colour: 'red'
//    };

export default Square;