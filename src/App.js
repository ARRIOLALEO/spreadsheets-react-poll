import React from "react";
import "./App.css";
import QuestionProvider from "./context/questions.jsx";
import Questions from "./templates/index.jsx";
import logoup from "./images/logos/logoup.png";
import logodown from "./images/logos/logodown.png";
function App() {
  return (
    <div>
      <img src={logoup} alt="logoup" className="image-head" />
      <QuestionProvider>
        <Questions />
      </QuestionProvider>
      <img src={logodown} alt="logodow" className="image-button" />
    </div>
  );
}

export default App;
