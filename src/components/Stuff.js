import Paragraph from './Paragraph';
import Square from './Square';
import People from './People';
import Clicked from './Clicked';
import Counter from './Counter';
import StepCounter from './StepCounter';
import CatchMeIfYouCan from './CatchMeIfYouCan';
import RollCall from './RollCall';
import GodCounter from './GodCounter';
import TwoCounters from './TwoCounters';
import Length from './forms/Length';
import TempConverter from './forms/TempConverter';
import List from './forms/List';

const Stuff = ({ showSquare }) => (
<>
    <Paragraph>A paragraph about React</Paragraph>
    {showSquare ? (<Square colour = 'pink'/>) : null}
    <People names = {["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]}/>
    <Clicked/>
    <Counter initial = {50} max = {100}/>
    <StepCounter max = {100} steps = {5}/>
    <CatchMeIfYouCan jump = {100}/>
    <RollCall names = { ["Ben", "Josie", "James", "Tom"] }/>
    <GodCounter/>
    <TwoCounters/>
    <Length/>
    <TempConverter/>
    <List/>
</>
);

Stuff.defaultProps = {
    showSquare: true,
 };

export default Stuff;