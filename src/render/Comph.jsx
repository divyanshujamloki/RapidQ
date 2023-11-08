import React, { useState } from "react";
import "./Comph.css";

function Comp() {
  const [comprehensionText, setComprehensionText] = useState("");
  const [options, setOptions] = useState(["", ""]);

  const handleAddOption = () => {
    setOptions([...options, ""]);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleDeleteOption = (index) => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };

  const handleComprehensionTextChange = (e) => {
    setComprehensionText(e.target.value);
  };

  return (
    <div className="mcq-container">
      <h3>Comprehension</h3>
      <textarea
        className="text-area"
        placeholder="Enter comprehension text here"
        value={comprehensionText}
        onChange={handleComprehensionTextChange}
      />

      <h3>MCQ Options</h3>
      {options.map((option, index) => (
        <div key={index} className="option-container">
          <input
            type="text"
            className="option-input"
            placeholder={`Option ${index + 1}`}
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          />
          <button
            className="delete-option-button"
            onClick={() => handleDeleteOption(index)}
          >
            Delete
          </button>
        </div>
      ))}
      <button className="add-option-button" onClick={handleAddOption}>
        Add Option
      </button>
    </div>
  );
}

export default Comp;
