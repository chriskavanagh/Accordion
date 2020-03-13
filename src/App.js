import React, { useState } from "react";
import Question from "./components/Question";
import Answer from "./components/Answer";
import "./styles.css";

export default function App() {
  //const [isOpen, setIsopen] = useState(false);
  const [questions, setQuestions] = useState([
    {
      id: 0,
      question: "How many programmers does it take to screw in a lightbulb?",
      answer: "None. We don't address hardware issues.",
      open: false
    },
    {
      id: 1,
      question: "Who is the most awesome person?",
      answer: "You. The Viewer.",
      open: false
    },
    {
      id: 2,
      question:
        "How many questions does it take to make a successful FAQ Page?",
      answer: "This many.",
      open: false
    }
  ]);

  const toggleAnswer = index => {
    setQuestions(
      questions.map((q, i) => {
        if (index === i) {
          q.open = !q.open;
          console.log(q);
        } else {
          q.open = false;
        }
        return q;
      })
    );
  };

  const divStyle = {
    color: "#A8A8A8",
    border: "1px solid skyblue",
    padding: "10px auto"
  };
  return (
    <div className="App">
      <h1 style={divStyle}>Questions/Answers Accordion</h1>
      {questions.map((q, i) => (
        <div key={i}>
          <Question question={q} toggle={toggleAnswer} index={i} />
          <Answer open={q.open} index={i} style={divStyle}>
            {q.answer}
          </Answer>
        </div>
      ))}
    </div>
  );
}
