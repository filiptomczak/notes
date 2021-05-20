import React, { useState } from "react";
import "./styles.css";
import CreateIcon from "@material-ui/icons/Create";
import InputBox from "./Components/InputBox.jsx";
import Note from "./Components/Note.jsx";

export default function App() {
  const year = new Date();

  const [notes, setNotes] = useState([]);

  function handleAdd(newNote) {
    setNotes((prev) => {
      return [...prev, newNote];
    });
    console.log(notes);
  }
  function handleDelete(id) {
    setNotes((prev) => {
      return prev.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="Content">
      <div className="Header">
        Keep In Mind <CreateIcon />
      </div>
      <div className="Main">
        <InputBox onAdd={handleAdd} />
        {notes.map((note, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              color={note.color}
              onDelete={handleDelete}
            />
          );
        })}
      </div>
      <div className="Footer">Copyright {year.getFullYear()}</div>
    </div>
  );
}
