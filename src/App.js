import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Stuff from "./components/Stuff";
import PasswordStrength from "./components/forms/PasswordStrength";
import List from "./components/forms/List";
import ToggleText from "./components/ToggleText";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FourOhFour from "./components/FourOhFour";
import Length from "./components/forms/Length";
import Square from "./components/Square";
import StepCounter from "./components/StepCounter";

const App = () => (
    <Router>
        <Header>Hello World</Header>
        <Switch>
            <Route exact path="/">
                <Length />
            </Route>
            <Route exact path="/passwordstrength">
                <PasswordStrength />
            </Route>
            <Route exact path="/stuff">
                <Stuff />
            </Route>
            <Route exact path="/toggle">
                <ToggleText initial="Hello" alternative="world" />
            </Route>
            <Route exact path="/list">
                <List />
            </Route>
            <Route
                path="/square/:colour"
                render={({ match }) => <Square colour={match.params.colour} />}
            />
			<Route
				path="/stepcount/:max/:steps"
				render={({ match }) => <StepCounter max={+match.params.max} steps={+match.params.steps} />}
			/>
            <FourOhFour />
        </Switch>
        <Footer />
    </Router>
);

export default App;
