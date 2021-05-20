import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  console.log(props.color);
  return (
    <div className="NotesArea" style={{ backgroundColor: props.color }}>
      <p>{props.title}</p>
      <p>{props.content}</p>

      <button onClick={handleClick}>delete</button>
    </div>
  );
}

export default Note;
