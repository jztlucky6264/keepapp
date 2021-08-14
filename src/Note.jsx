import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
const Note = (props) => {
  const deleteItems = () => {
    props.deleteNote(props.id);
  };
  return (
    <>
      <div className="main_note">
        <div className="note">
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <DeleteIcon className="btn" onClick={deleteItems} />
        </div>
      </div>
    </>
  );
};
export default Note;
