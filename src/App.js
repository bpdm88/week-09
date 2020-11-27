import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Stuff from "./components/Stuff";
import ToggleText from "./components/ToggleText";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FourOhFour from "./components/FourOhFour";
import Length from "./components/forms/Length";
import Square from "./components/Square";
import StepCounter from "./components/StepCounter";
import Forms from "./components/Forms";
import Lifecycle from "./components/Lifecycle";
import AddProp from "./components/AddProp";
import PreMade from "./components/PreMade";

const App = () => (
    <Router>
        <Header>Hello World</Header>
        <Switch>
            <Route exact path="/">
                <Length />
            </Route>
            <Route exact path="/forms">
                <Forms />
            </Route>
            <Route exact path="/stuff">
                <Stuff />
            </Route>
            <Route exact path="/lifecycle">
                <Lifecycle/>
            </Route>
            <Route exact path="/addprop">
                <AddProp/>
            </Route>
            <Route exact path="/premade">
                <PreMade/>
            </Route>
            <Route exact path="/toggle">
                <ToggleText initial="Hello" alternative="World" />
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
