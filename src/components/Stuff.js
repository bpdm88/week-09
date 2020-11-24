import Header from './Header';
import Paragraph from './Paragraph';
import Square from './Square';
import People from './People';

const Stuff = ({ showSquare }) => (
<>
    <Header>Hello, World!</Header>
    <Paragraph>A paragraph about React</Paragraph>
    {showSquare ? (<Square colour = 'blue'/>) : null}
    <People names = {["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]}/>
</>
);

Stuff.defaultProps = {
    showSquare: true,
 };

export default Stuff;