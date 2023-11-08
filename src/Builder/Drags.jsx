import React, { useState } from "react";
import "./Drag.css"; // Import the CSS file

const Drags = () => {
  const [items1, setItems1] = useState(["Item 1", "Item 2", "Item 3"]);
  const [droppedItems1, setDroppedItems1] = useState([]);

  const handleDragStart1 = (e, item) => {
    e.dataTransfer.setData("text/plain", item);
  };

  const handleDrop1 = (e) => {
    e.preventDefault();
    const text = e.dataTransfer.getData("text/plain");
    setDroppedItems1([...droppedItems1, text]);
  };

  return (
    <div className="app">
      <h2>Drag and Drop</h2>

      <div className="list-container">
        <div className="draggable-list">
          {items1.map((item, index) => (
            <div
              key={index}
              className="draggable-item"
              draggable="true"
              onDragStart={(e) => handleDragStart1(e, item)}
            >
              {item}
            </div>
          ))}
        </div>

        <DroppableContainer onDrop={handleDrop1} droppedItems={droppedItems1} />
      </div>
    </div>
  );
};

const Drags2 = () => {
  const [items2, setItems2] = useState(["Item A", "Item B", "Item C"]);
  const [droppedItems2, setDroppedItems2] = useState([]);

  const handleDragStart2 = (e, item) => {
    e.dataTransfer.setData("text/plain", item);
  };

  const handleDrop2 = (e) => {
    e.preventDefault();
    const text = e.dataTransfer.getData("text/plain");
    setDroppedItems2([...droppedItems2, text]);
  };

  return (
    <div className="app">
      <h2>Drag and Drop </h2>

      <div className="list-container">
        <div className="draggable-list">
          {items2.map((item, index) => (
            <div
              key={index}
              className="draggable-item"
              draggable="true"
              onDragStart={(e) => handleDragStart2(e, item)}
            >
              {item}
            </div>
          ))}
        </div>

        <DroppableContainer onDrop={handleDrop2} droppedItems={droppedItems2} />
      </div>
    </div>
  );
};

const DroppableContainer = ({ onDrop, droppedItems }) => {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (onDrop) {
      onDrop(e);
    }
  };

  return (
    <div
      className="droppable-container"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <p className="droppable-text">
        {droppedItems.length === 0 ? "Drop items here" : "Dropped items:"}
      </p>
      {droppedItems.map((item, index) => (
        <p key={index} className="dropped-item">
          {item}
        </p>
      ))}
    </div>
  );
};

export default function App() {
  return (
    <div style={{ display: "flex" }}>
      <Drags />
      <Drags2 />
    </div>
  );
}
