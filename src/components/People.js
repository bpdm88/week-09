const People = ({ names }) => (
    
    names ? 
        <ul>
            {names.map((value, index) => (
                <li key = { index }>{ value }</li>
            ))}
        </ul> 
    : <p>Nothing to see here!</p>
);

export default People;