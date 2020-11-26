import React from "react";

class Paragraph extends React.Component {

  render() {
    const { children } = this.props;

    return (
      <div class="jumbotron">
        <h3> { children } </h3>
      </div>
    );
  }
}
  
Paragraph.defaultProps = {
  children: "This is the default message"
};

export default Paragraph;