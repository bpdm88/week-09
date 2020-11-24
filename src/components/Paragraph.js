   const Paragraph = ({ children }) => (
    <p>{ children }</p>
  );
  
  Paragraph.defaultProps = {
    children: "This is the default message"
   };

  export default Paragraph;