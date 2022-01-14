import React from "react";
import { AllQuestions } from "../context/questions.jsx";
import TextImput from "../components/questionone/index.jsx";
import QuestionTwo from "../components/questiontwo/index.js";
import QuestionsTree from "../components/questiontree/index.jsx";
import QuestionFour from "../components/questionfour/index.jsx";
import QuestionFive from "../components/questionfive/index.jsx";
import SaveForm from "../components/endform/index.jsx";
const Questions = (props) => {
  return (
    <>
      <section id="questions">
        <AllQuestions.Consumer>
          {(context) =>
            context.question ? (
              <>
                <section id="btns" className="content-between">
                  <div
                    class={`arrow${context.question.questionType}left arrow-left`}
                    role="button"
                    onClick={() => context.previus()}
                  ></div>

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
                    } else if (context.question.questionType === 4) {
                      return <QuestionFour data={context.question} />;
                    } else if (context.question.questionType === 5) {
                      return <QuestionFive data={context.question} />;
                    } else {
                      return <SaveForm />;
                    }
                  })()}
                  <div
                    className={`arrow${context.question.questionType}right arrow-right`}
                    role="button"
                    onClick={() => context.next()}
                  ></div>
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
