import React from "react";
import "./App.css";
import QuestionProvider, { AllQuestions } from "./context/questions.jsx";
import Questions from "./templates/index.jsx";
function App() {
  return (
    <>
      <QuestionProvider>
        <Questions />
      </QuestionProvider>
    </>
  );
}

export default App;
