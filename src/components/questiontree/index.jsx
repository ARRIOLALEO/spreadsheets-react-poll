import React from "react";
import { AllQuestions } from "../../context/questions.jsx";

const QuestionTree = (props) => {
  const { id, title, options, bg } = props.data;
  const url = `./images/${bg}`;
  document.body.style.backgroundImage = `url(${url})`;
  function saveHandler(save, data) {
    save(data);
  }
  return (
    <>
      <AllQuestions.Consumer>
        {(context) => (
          <>
            {" "}
            <h1 className="questionTitle">{title}</h1>
            <section className="flex max-w-min">
              {options.map((option) => (
                <section className="btnOptionsText">
                  <button className="w-34" onClick={() => context.btnHandler(option)}>
                    {option}
                  </button>
                </section>
              ))}
            </section>
          </>
        )}
      </AllQuestions.Consumer>
    </>
  );
};

export default QuestionTree;
