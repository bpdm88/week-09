import Multiplier from "./quiz/Multiplier";
import Even from "./quiz/Even";
import CountBy from "./quiz/CountBy";
import HideMe from "./quiz/HideMe";
import MiniumLength from "./quiz/MinimumLength";

const Quiz = () => (
    <>
        <Multiplier x={6} y={10} />
        <Even />
        <CountBy step={5} />
        <HideMe>Blah Blah Blah</HideMe>
        <MiniumLength />
    </>
);

export default Quiz;
