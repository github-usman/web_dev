import React, { useState } from "react";
import copy from "copy-to-clipboard";
import './TextForm.css';
import Footer from "./Footer";

export default function TextForm(props) {
  const [text, setText] = useState("");
  // text = "new text" wrong way
  // setText("new text"); correct way

  const handleUpClick = () => {
    setText(text.toUpperCase());
   props.showAlert("Converted to Uppercase","success ");
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase","success ");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text cleared","success ");
  };

  const handleCopyClick = () => {
     const newText = document.getElementById("myBox");
     newText.select();
    copy(text);
    props.showAlert("Text has been copied to Clipboard","success ");

  };
// for remove bugg word count
   let testText = text.split(/[ ]+/);
   testText = testText.join(" ");
   let valueCheck = 1;
   if (testText.length === 0){
    valueCheck = 0;
   }
    else if(testText === " "){
     valueCheck = 0;
   }else{
    if(testText.substring(testText.length-1,testText.length) === " "){
        valueCheck = testText.split(" ").length-1;
    }else{
        valueCheck = testText.split(" ").length;
    }
    
   }


// end logic of word count 
  const handleRemoveSpaceClick = () => {   
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra Spaces has been Removed","success ");

 };


  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className={`container my-3 `}>
        <h1>{props.heading} </h1>
        <div className="mb-3 ">
          <textarea
            id="myBox"
            rows="8"
            className={`form-control ${(props.mode === 'Enable Dark Mode'?'textarea_bg_light':'textarea_bg_dark')}`}
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
        <button className="btn btn-success my-3 mx-3" onClick={handleCopyClick}>
          Copy text
        </button>
        <button className="btn btn-success my-3 mx-3" onClick={handleRemoveSpaceClick}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-danger my-3 mx-3" onClick={handleClearClick}>
          Clear Text
        </button>
         
      </div>
      <div className={`container my-3 `}>
        <h1>Your text summary</h1>
        <p>{valueCheck} words and {text.length} characters</p>
        <p>{((text.split(" ").length)*(0.008)).toFixed(3)}  <strong>Minutes</strong> need to read</p>
      </div>
      <div className="container my-3">
        <h2 className="text-warning">{text.length>0?'Preview':'Enter Your text above to Preview here'}</h2>
        <p>{text}</p>
      </div>

       <div className="text_footer">
      <Footer mode={props.mode}/>
      </div>
    </>
  );
}
