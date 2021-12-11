import React, { useEffect, createContext, useState } from "react";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { Data } from "../data/data";
export const AllQuestions = createContext();

// this object doc is my conection to google sheets
const doc = new GoogleSpreadsheet(`${process.env.REACT_APP_SHEET}`);

const QuestionProvider = ({ children }) => {
  async function storeFile() {
    await doc.useServiceAccountAuth({
      client_email: process.env.REACT_APP_CLIENT_EMAIL,
      private_key: process.env.REACT_APP_KEY.replace(/\\n/g, "\n"),
    });

    await doc.loadInfo();
    const sheet = await doc.sheetsByIndex[0];
    if (sheet) {
      // creating an object with all values
      const newForm = {};
      for (let key = 0; key < responses.length; key++) {
        newForm[key] = responses[key];
      }
      console.log(newForm);
      const larryRow = await sheet.addRow(newForm);
    }
  }

  const [position, SetPostion] = useState(0);
  const [valueimput, SetValueImput] = useState("");
  const [responses, setResponses] = useState(new Array(20));
  const [question, SetQuestion] = useState(null);
  const [optionSelected, SetOptionSelected] = useState(null);
  const max_questions = Object.keys(Data).length;

  useEffect(() => {
    SetQuestion({ ...Data[position] });
  }, [position]);

  const save = () => {
    setResponses([...responses.slice(0, position), valueimput, responses.slice(position + 1)]);
    SetPostion(position + 1);
    SetValueImput("");
  };

  const next = () => {
    if (position < max_questions) {
      save();
    }
  };

  const updatevalue = (value) => {
    SetValueImput(value);
  };

  function btnHandler(value) {
    setResponses([
      ...responses.slice(0, position),
      value,
      responses.slice(position + 1, responses.length - 1),
    ]);
    SetPostion(position + 1);
    console.log(responses);
  }

  const previus = () => {
    if (position > 0) {
      SetPostion(position - 1);
    }
  };

  const optionQuestions = {
    question,
    SetPostion,
    next,
    valueimput,
    previus,
    updatevalue,
    responses,
    optionSelected,
    btnHandler,
    storeFile,
    max_questions,
  };
  return <AllQuestions.Provider value={optionQuestions}>{children}</AllQuestions.Provider>;
};

export default QuestionProvider;
