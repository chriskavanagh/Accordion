import React from "react";

const divStyle = {
  cursor: "pointer"
};

const Question = ({ question, toggle, index }) => {
  return (
    <h3 onClick={() => toggle(index)} key={index} style={divStyle}>
      {question.question}
    </h3>
  );
};

export default Question;
