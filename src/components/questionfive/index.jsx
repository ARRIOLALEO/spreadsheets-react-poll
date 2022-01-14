import React from "react";
import { AllQuestions } from "../../context/questions.jsx";

const QuestionFive = (props) => {
  function hanlderBtn(save, value) {
    save(value);
  }
  const { images, title, bg } = props.data;
  const url = `./images/${bg}`;
  document.body.style.background = `url(${url})`;
  document.body.style.backgroundSize = "cover";
  return (
    <section className="sectionQuestion">
      <h1 className="questionTwoTitle">{title}</h1>
      <AllQuestions.Consumer>
        {(context) => (
          <section className="flex">
            {images.map((img) => (
              <section>
                <button
                  className="w-28 btnCenterItems no-border"
                  onClick={() => hanlderBtn(context.btnHandler, img.description)}
                >
                  <img
                    src={`./images/${img.url}`}
                    className=" h-24 w-24 flex items-center justify-center"
                    alt={img.description}
                  />
                </button>
                <button
                  className="btnOptionsText"
                  onClick={() => hanlderBtn(context.btnHandler, img.description)}
                >
                  {" "}
                  {img.description}{" "}
                </button>
              </section>
            ))}
          </section>
        )}
      </AllQuestions.Consumer>
    </section>
  );
};

export default QuestionFive;
