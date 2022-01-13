import React from "react";
import { AllQuestions } from "../../context/questions.jsx";

const QuestionFive = (props) => {
  function hanlderBtn(save, value) {
    save();
  }
  const { images, title, placeholder, bg } = props;
  const url = `./images/${bg}`;
  document.body.style.backgroundImage = `url(${url})`;
  document.body.backgroundSize = "cover";
  return (
    <section className="sectionQuestion">
      <h1 className="questionTwoTitle">{title}</h1>
      <AllQuestions.Consumer>
        {(context) => (
          <section className="flex">
            {images.map((image) => (
              <section>
                <button
                  className=""
                  onClick={() => hanlderBtn(context.hanlderBtn, img.description)}
                >
                  <img
                    src={`./images/${img.url}`}
                    className="h-24 w-24 flex items-center justify-center"
                    alt={img.description}
                  />
                </button>
                <button onClick={() => hanlderBtn(context.hanlderBtn, img.description)}>
                  {img.description}
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
