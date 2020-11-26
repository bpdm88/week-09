import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {

    render() {

        return (
            <footer class="navbar navbar-expand-lg navbar-light bg-light">
                    <li class="nav-link"><Link to ="/">Home</Link></li>
                    <li class="nav-link"><Link to ="/passwordstrength">Password Strength</Link></li>
                    <li class="nav-link"><Link to = "/stuff">All the Stuff</Link></li>
                    <li class="nav-link"><Link to = "/toggle">Toggle</Link></li>
                    <li class="nav-link"><Link to ="/list">List</Link></li>
                    <li class="nav-link"><Link to ="/stepcount/:max/:steps">Steps</Link></li>
            </footer>
        );
    }
}

export default Footer;