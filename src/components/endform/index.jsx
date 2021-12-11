import React from "react";
import { AllQuestions } from "../../context/questions.jsx";

const SaveForm = () => {
  return (
    <>
      <AllQuestions.Consumer>
        {(context) => <button onClick={() => context.storeFile()}>SAVE DATA</button>}
      </AllQuestions.Consumer>
    </>
  );
};

export default SaveForm;
