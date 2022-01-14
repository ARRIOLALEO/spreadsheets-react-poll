import React, { useEffect, useRef } from "react";
import { AllQuestions } from "../../context/questions.jsx";
const TextImput = (props) => {
  const { id, title, placeholder, bg } = props;

  const url = `./images/${bg}`;
  document.body.style.backgroundImage = `url(${url})`;
  document.body.style.backgroundSize = "cover";
  const inputRef = useRef("");
  useEffect(() => {
    document.getElementById(id).value = "";
    inputRef.current.focus();
  }, [title]);
  return (
    <>
      <AllQuestions.Consumer>
        {(context) => (
          <section className="sectionQuestion">
            <h1 className="questionTitle">{title}</h1>
            <input
              id={id}
              type="text"
              autoFocus
              ref={inputRef}
              class="h-12 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
              placeholder={placeholder}
              onChange={(e) => context.updatevalue(e.target.value)}
              onKeyPress={(ev) => {
                if (ev.key === "Enter") {
                  ev.target.value = "";
                  context.next();
                }
              }}
            />
          </section>
        )}
      </AllQuestions.Consumer>
    </>
  );
};

export default TextImput;
