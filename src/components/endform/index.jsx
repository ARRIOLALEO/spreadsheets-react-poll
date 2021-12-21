import React from "react";
import { AllQuestions } from "../../context/questions.jsx";

const SaveForm = () => {
  return (
    <>
      <AllQuestions.Consumer>
        {(context) => (
          <div className="savebtn" role="button" onClick={() => context.storeFile()}>
            Guardar
          </div>
        )}
      </AllQuestions.Consumer>
    </>
  );
};

export default SaveForm;
