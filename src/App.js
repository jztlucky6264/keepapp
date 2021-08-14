import { SettingsInputAntenna } from "@material-ui/icons";
import React, { useState } from "react";
import CreatNote from "./CreateNote";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

const App = () => {
  const [additems, setAddItems] = useState([]);
  const addNote = (inp) => {
    setAddItems((prevData) => {
      return [...prevData, inp];
    });
  };
  const clearNote = (id) => {
    console.log("d");
    setAddItems((prevData) => {
      return prevData.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <Header></Header>
      <CreatNote passNote={addNote} />

      {additems.map((val, index) => {
        return (
          <Note
            deleteNote={clearNote}
            key={index}
            id={index}
            title={val.title}
            content={val.content}
          />
        );
      })}
      <Footer></Footer>
    </>
  );
};
export default App;
