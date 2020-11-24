import React from "react";

class Paragraph extends React.Component {

  render() {
    const { children } = this.props;

    return (
      <p> { children } </p>
    );
  }
}
  
Paragraph.defaultProps = {
  children: "This is the default message"
};

export default Paragraph;