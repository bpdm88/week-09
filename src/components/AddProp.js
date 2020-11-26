import Paragraph from './Paragraph';
import Square from './Square';
import People from './People';

const AddProp = ({ showSquare }) => (
    <>
        <Paragraph>A paragraph about React</Paragraph>
        {showSquare ? (<Square colour = 'pink'/>) : null}
        <People names = {["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]}/>
    </>
);

AddProp.defaultProps = {
    showSquare: true,
 };

export default AddProp;