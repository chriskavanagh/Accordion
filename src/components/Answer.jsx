import React from "react";

const divStyle = {
  color: "salmon",
  textDecoration: "underline"
};

const Answer = ({ children, index, open }) => {
  console.log(open);
  return open === true ? (
    <div key={index} style={divStyle}>
      {children}
    </div>
  ) : null;
};
export default Answer;
