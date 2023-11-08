import React, { useState } from "react";
import "./Close.css";

function Close() {
  const [fruitItems, setFruitItems] = useState(["Apple", "Banana", "Orange"]);
  const [newFruitItem, setNewFruitItem] = useState("");
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (item, index) => {
    setDraggedItem({ item, index });
  };

  const handleDragEnter = (dropIndex) => {
    if (draggedItem !== null && draggedItem.index !== dropIndex) {
      const updatedItems = [...fruitItems];
      updatedItems.splice(draggedItem.index, 1);
      updatedItems.splice(dropIndex, 0, draggedItem.item);
      setFruitItems(updatedItems);
      setDraggedItem({ item: draggedItem.item, index: dropIndex });
    }
  };

  const handleAddSelectedText = () => {
    const selectedText = window.getSelection().toString().trim();
    if (selectedText) {
      setFruitItems([...fruitItems, selectedText]);
    }
  };

  return (
    <div className="app">
      <h2>Fruit List</h2>

      <div className="input-group">
        <input
          type="text"
          name="fruitName"
          placeholder="e.g Banana"
          value={newFruitItem}
          onChange={(e) => setNewFruitItem(e.target.value)}
        />
        <button className="btn" onClick={handleAddSelectedText}>
          Add selected text
        </button>
      </div>

      <div className="list-sort">
        {fruitItems.map((item, index) => (
          <div
            key={index}
            className="list-item"
            draggable
            onDragStart={() => handleDragStart(item, index)}
            onDragEnter={() => handleDragEnter(index)}
            onDragOver={(e) => e.preventDefault()}
          >
            <i className="fa-solid fa-bars"></i>
            <h3>{item}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Close;
