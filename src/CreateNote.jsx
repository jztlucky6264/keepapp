import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const CreatNote = (props) => {
  const [hidden, setHidden] = useState(false);
  const clickDown = () => {
    setHidden(true);
    console.log("hello");
  };
  const clickUp = () => {
    setHidden(false);
  };
  const [inp, setInp] = useState({
    title: "",
    content: "",
  });

  const targetInp = (event) => {
    const { name, value } = event.target;
    setInp((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  const writeText = () => {
    if (inp.title == "" && inp.content == "") {
      alert("please write something");
    } else if (inp.title == "" || inp.content == "") {
      alert("please write all fields");
    } else {
      props.passNote(inp);
    }
    setInp({
      title: "",
      content: "",
    });
  };

  return (
    <>
      <div className="Note_div">
        <form>
          <input
            id="input "
            onClick={clickDown}
            onDoubleClick={clickUp}
            type="text"
            onChange={targetInp}
            value={inp.title}
            placeholder="Title"
            name="title"
            autoComplete="off"
          ></input>
          <p>
            <textarea
              style={{ display: hidden ? "block" : "none" }}
              name="content"
              value={inp.content}
              onChange={targetInp}
              placeholder="write notes here"
            ></textarea>
          </p>
          <Button onClick={writeText}>
            <AddIcon></AddIcon>
          </Button>
        </form>
      </div>
    </>
  );
};
export default CreatNote;
