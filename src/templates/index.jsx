import React from "react";
import { AllQuestions } from "../context/questions.jsx";
import TextImput from "../components/questionone/index.jsx";
import QuestionTwo from "../components/questiontwo/index.js";
import QuestionsTree from "../components/questiontree/index.jsx";
import left from "../images/arrows/left.png";
import right from "../images/arrows/right.png";
import SaveForm from "../components/endform/index.jsx";
const Questions = (props) => {
  return (
    <>
      <section id="questions">
        <AllQuestions.Consumer>
          {(context) =>
            context.question ? (
              <>
                {(() => {
                  if (context.question.questionType === 1) {
                    return (
                      <TextImput
                        id={context.question.id}
                        title={context.question.title}
                        placeholder={context.question.placeholder}
                        bg={context.question.bg}
                      ></TextImput>
                    );
                  } else if (context.question.questionType === 2) {
                    return (
                      <QuestionTwo
                        images={context.question.images}
                        title={context.question.title}
                        bg={context.question.bg}
                      />
                    );
                  } else if (context.question.questionType === 3) {
                    return <QuestionsTree data={context.question} />;
                  } else {
                    return <SaveForm />;
                  }
                })()}
                <section id="btns">
                  <button onClick={() => context.previus()}>
                    <img className="leftArrow" src={left} alt="left" />
                  </button>
                  <button className="btnEnd" onClick={() => context.next()}>
                    {" "}
                    <img src={right} className="rightArrow" alt="right" />{" "}
                  </button>
                </section>
              </>
            ) : (
              <>"im loading"</>
            )
          }
        </AllQuestions.Consumer>
      </section>
    </>
  );
};

export default Questions;
