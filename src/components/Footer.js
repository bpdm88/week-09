import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {

    render() {

        return (
            <footer>
                <ul>
                    <li><Link to ="/">Home</Link></li>
                    <li><Link to ="/passwordstrength">Password Strength</Link></li>
                    <li><Link to = "/stuff">All the Stuff</Link></li>
                    <li><Link to = "/toggle">Toggle</Link></li>
                    <li><Link to ="/list">List</Link></li>
                    <li><Link to ="/stepcount/:max/:steps">Steps</Link></li>
                </ul>
            </footer>
        );
    }
}

export default Footer;