import React from "react";
import { AllQuestions } from "../../context/questions.jsx";

const QuestionFour = (props) => {
  const { title, options, bg, description, imagenDescription } = props.data;
  const url = `./images/${bg}`;
  document.body.style.background = `url(${url})`;
  document.body.style.backgroundSize = "cover";
  return (
    <section className="sectionQuestion">
      <h1 className="questionTitle">{title}</h1>
      <span> {description} </span>
      <img className="h-24 w-24" src={`./images/${imagenDescription}`} alt={imagenDescription} />
      <section className="flex max-w-min">
        <AllQuestions.Consumer>
          {(context) =>
            options.map((option) => (
              <section className="btnOptionsText">
                <button className="w-34" onClick={() => context.btnHandler(option)}>
                  {option}
                </button>
              </section>
            ))
          }
        </AllQuestions.Consumer>
      </section>
    </section>
  );
};

export default QuestionFour;
