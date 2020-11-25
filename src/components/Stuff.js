import Header from './Header';
import Paragraph from './Paragraph';
import Square from './Square';
import People from './People';
import Clicked from './Clicked';
import ToggleText from './ToggleText';
import Counter from './Counter';
import StepCounter from './StepCounter';
import CatchMeIfYouCan from './CatchMeIfYouCan';
import RollCall from './RollCall';

const Stuff = ({ showSquare }) => (
<>
    <Header>Hello, World!</Header>
    <Paragraph>A paragraph about React</Paragraph>
    {showSquare ? (<Square colour = 'pink'/>) : null}
    <People names = {["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]}/>
    <Clicked/>
    <ToggleText initial = "Hello" alternative = "world"/>
    <Counter initial = {50} max = {100}/>
    <StepCounter max = {100} steps = {5}/>
    <CatchMeIfYouCan jump = {100}/>
    <RollCall names = { ["Ben", "Josie", "James", "Tom"] }/>
</>
);

Stuff.defaultProps = {
    showSquare: true,
 };

export default Stuff;