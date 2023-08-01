import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  // text = "new text" wrong way
  // setText("new text"); correct way

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
  };

  const handleClearClick = () => {
    setText("");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container my-3">
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            id="myBox"
            rows="8"
            className="form-control"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary my-3 mx-3" onClick={handleUpClick}>
          Uppercase
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleLoClick}>
          Lowercase
        </button>
        <button className="btn btn-danger my-3 mx-3" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{((text.split(" ").length)*(0.008)).toFixed(3)}  <strong>Minutes</strong> need to read</p>
      </div>
      <div className="container my-3">
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
