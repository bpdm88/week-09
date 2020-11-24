const Square = ({ colour }) => (
    <div style={{
        background: colour,
        width: 200,
        height: 200,
    }} />
);

Square.defaultProps = {
    colour: 'red'
   };

export default Square;