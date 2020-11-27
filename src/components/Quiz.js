import Multiplier from "./quiz/Multiplier";
import Even from "./quiz/Even";
import CountBy from "./quiz/CountBy";
import HideMe from "./quiz/HideMe";

const Quiz = () => (
    <>
        <Multiplier x={6} y={10} />
        <Even />
        <CountBy step={5} />
        <HideMe>Blah Blah Blah</HideMe>
    </>
);

export default Quiz;
