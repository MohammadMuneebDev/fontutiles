import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('Enter text here');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","sucsess");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","sucsess");

  };

  const handleClearClick = () => {
    setText('');
    props.showAlert("Cleared all chat","sucsess");

  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("text copied","sucsess");
    
  };

  const handleRemoveExtraSpaces = () => {
    let newText = text.split(/\s+/).join(' ');
    setText(newText);
    props.showAlert("Extra spaces removed","sucsess");

  };

  const handleReverseText = () => {
    let newText = text.split('').reverse().join('');
    setText(newText);
    props.showAlert("Text is reversed","sucsess");

  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const characterCount = text.replace(/\s+/g, '').length;

  return (
    <>
      <div className="mb-3">
        <div className="container">
          <label htmlFor="mybox" className="form-label">
            <h1>{props.heading}</h1>
          </label>
          <textarea
            className="form-control my-2"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
          ></textarea>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleLowClick}>
            Convert to Lowercase
          </button>
          <button className="btn btn-secondary mx-2" onClick={handleClearClick}>
            Clear Text
          </button>
          <button className="btn btn-success mx-2" onClick={handleCopyClick}>
            Copy to Clipboard
          </button>
          <button className="btn btn-info mx-2" onClick={handleRemoveExtraSpaces}>
            Remove Extra Spaces
          </button>
          <button className="btn btn-warning mx-2" onClick={handleReverseText}>
            Reverse Text
          </button>
        </div>
      </div>

      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
        <p>Your text contains {wordCount} {wordCount === 1 ? 'word' : 'words'} and {characterCount} characters</p>
        </p>
        <p>{0.008 * text.split(' ').filter(word => word !== '').length} minutes to read</p>
        <h2>Preview</h2>
        <p style={{ textAlign: 'left' }}>{text}</p>
      </div>
    </>
  );
}
