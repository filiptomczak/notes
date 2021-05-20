import React, { useState } from "react";
import { Fade } from "@material-ui/core";
import { Zoom } from "@material-ui/core";

function InputBox(props) {
  const [clickSetting, setSetting] = useState(false);
  const [clickContent, setContent] = useState(false);
  //const [color, setColor] = useState("white");
  const [inputNote, setText] = useState({
    title: "",
    content: "",
    color: "white"
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setText((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
    console.log(inputNote);
  }

  function handleAdd(event) {
    event.preventDefault();
    console.log("input note on handle add: " + inputNote.color);
    props.onAdd(inputNote);
    setText({
      title: "",
      content: "",
      color: "white"
    });
  }
  function handleClickContent(event) {
    setContent(true);
  }
  function handleClickSettings(event) {
    event.preventDefault();
    setSetting(!clickSetting);
  }
  function handleColor(event) {
    event.preventDefault();
    const col = event.target.name;
    setSetting(!clickSetting);
    //setColor(color);

    setText((prev) => {
      return {
        ...prev,
        color: col
      };
    });
  }

  return (
    <div>
      <form className="InputArea" style={{ backgroundColor: inputNote.color }}>
        {clickContent && (
          <input
            value={inputNote.title}
            name="title"
            placeholder="Title"
            onChange={handleChange}
          />
        )}
        <textarea
          value={inputNote.content}
          name="content"
          placeholder="Write some notes..."
          onChange={handleChange}
          onClick={handleClickContent}
        />
        <Zoom in={clickContent}>
        <div>
          <button className="btn-add" onClick={handleAdd}>
            +
          </button>
        
          <button className="btn-settings" onClick={handleClickSettings}>
            ...
          </button>
          </div>
          </Zoom>
        <Fade in={clickSetting}>
          <div
            className="Colors"
            style={{ visibility: clickSetting ? "visible" : "hidden" }}
          >
            <button
              name="#ff677d"
              onClick={handleColor}
              className="Color Red"
            />
            <button
              name="#a2de96"
              onClick={handleColor}
              className="Color Green"
            />
            <button
              name="#00bcd4"
              onClick={handleColor}
              className="Color Blue"
            />
          </div>
        </Fade>
      </form>
    </div>
  );
}

export default InputBox;
