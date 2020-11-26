import React from "react";

class Header extends React.Component {

    render() {
        const { children } = this.props;

        return (
            <header class="alert alert-warning alert-dismissible fade show" role="alert">
                <h1>{ children }</h1>
            </header>
        );
    }
}

export default Header;