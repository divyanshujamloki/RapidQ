import React, { useState } from "react";
import "./Home.css"

export default function Comps() {
  const [comprehensionText, setComprehensionText] = useState("");
  const [options, setOptions] = useState([false, false]);

  const handleOptionChange = (index) => {
    const newOptions = [...options];
    newOptions[index] = !newOptions[index]; 
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
      {options.map((isChecked, index) => (
        <div key={index} className="option-container">
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => handleOptionChange(index)}
            />
            Option {index + 1}
          </label>
        </div>
      ))}
    </div>
  );
}
