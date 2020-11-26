import Clicked from './Clicked';
import Counter from './Counter';
import StepCounter from './StepCounter';
import CatchMeIfYouCan from './CatchMeIfYouCan';
import RollCall from './RollCall';

const Stuff = () => (
<>
    <Clicked/>
    <Counter initial = {50} max = {100}/>
    <StepCounter max = {100} steps = {5}/>
    <CatchMeIfYouCan jump = {100}/>
    <RollCall names = { ["Ben", "Josie", "James", "Tom"] }/>
</>
);


export default Stuff;