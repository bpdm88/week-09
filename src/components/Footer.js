import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {

    render() {

        return (
            <footer class="navbar navbar-expand-lg navbar-light bg-light">
                    <li class="nav-link"><Link to ="/">Home</Link></li>
                    <li class="nav-link"><Link to ="/forms">Forms</Link></li>
                    <li class="nav-link"><Link to = "/stuff">State</Link></li>
                    <li class="nav-link"><Link to ="/lifecycle">Lifecycle</Link></li>
                    <li class="nav-link"><Link to = "/toggle">Toggle</Link></li>
                    <li class="nav-link"><Link to ="/addprop">Adding Props</Link></li>
                    <li class="nav-link"><Link to ="/premade">Pre Built Components</Link></li>
            </footer>
        );
    }
}

export default Footer;