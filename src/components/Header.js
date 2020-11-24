import React from "react";

class Header extends React.Component {

    render() {
        const { children } = this.props;

        return (
            <header>
                <h1>{ children }</h1>
            </header>
        );
    }
}

export default Header;