import React from "react";
import { AllQuestions } from "../../context/questions.jsx";

const QuestionTwo = (props) => {
  function hanlderBtn(save, value) {
    save(value);
  }
  const { images, title, bg } = props;
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
              <section className="btnOptions">
                <button
                  className="w-28 btnCenterItems"
                  onClick={() => hanlderBtn(context.btnHandler, img.description)}
                >
                  <img
                    src={`./images/${img.url}`}
                    className="rounded-full h-24 w-24 flex items-center justify-center"
                    alt={img.description}
                  />
                </button>
                <button
                  className="btnTitle"
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

export default QuestionTwo;
