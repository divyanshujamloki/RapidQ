import React, { useState } from "react";
import "./Close.css";

function Drag() {
    const [items, setItems] = useState(["Apple", "Banana", "Orange"]);
    const [itemsText, setItemsText] = useState("");
    const [belongs, setBelongs] = useState(["Item 1", "Item 2", "Item 3"]);
    const [belongsText, setBelongsText] = useState("");
    const [categories, setCategories] = useState([
      "Category 1",
      "Category 2",
      "Category 3",
    ]);
    const [categoriesText, setCategoriesText] = useState("");
    const [draggedItem, setDraggedItem] = useState(null);

    const handleDragStart = (item, index) => {
      setDraggedItem({ item, index });
    };

    const handleDragEnter = (dropIndex, section, setSection, setText) => {
      if (draggedItem !== null && draggedItem.index !== dropIndex) {
        const updatedItems = [...section];
        updatedItems.splice(draggedItem.index, 1);
        updatedItems.splice(dropIndex, 0, draggedItem.item);
        setText("");
        setSection(updatedItems);
        setDraggedItem({ item: draggedItem.item, index: dropIndex });
      }
    };

    const handleAddText = (section, setSection, text, setText) => {
      if (text.trim() !== "") {
        setText("");
        setSection([...section, text]);
      }
    };

    const handleRemoveItem = (index, section, setSection) => {
      const updatedItems = [...section];
      updatedItems.splice(index, 1);
      setSection(updatedItems);
    };

    const handleSelectChange = (e, index) => {
      const updatedBelongs = [...belongs];
      updatedBelongs[index] = e.target.value;
      setBelongs(updatedBelongs);
    };

    return (
      <>
        <div>
          <div className="app">
            <h2>Items</h2>

            <div className="input-group">
              <input
                type="text"
                name="fruitName"
                placeholder="e.g Banana"
                value={itemsText}
                onChange={(e) => setItemsText(e.target.value)}
              />
              <button
                className="btn"
                onClick={() =>
                  handleAddText(items, setItems, itemsText, setItemsText)
                }
              >
                Add Text
              </button>
            </div>

            <div className="list-sort">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="list-item"
                  draggable
                  onDragStart={() => handleDragStart(item, index)}
                  onDragEnter={() =>
                    handleDragEnter(index, items, setItems, setItemsText)
                  }
                  onDragOver={(e) => e.preventDefault()}
                >
                  <i className="fa-solid fa-bars"></i>
                  <h3>{item}</h3>
                  <button
                    onClick={() => handleRemoveItem(index, items, setItems)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="Top" style={{display:"flex" , margin:"20px" ,border:"solid"}}>
          <div className="category" style={{margin:"50px"}}>
            <div className="app">
              <h2>Category</h2>

              <div className="input-group">
                <input 
                  type="text"
                  name="fruitName"
                  placeholder="e.g Banana"
                  value={categoriesText}
                  onChange={(e) => setCategoriesText(e.target.value)}
                />
                <button
                  className="btn"
                  onClick={() =>
                    handleAddText(
                      categories,
                      setCategories,
                      categoriesText,
                      setCategoriesText
                    )
                  }
                >
                  Add Text
                </button>
              </div>

              <div className="list-sort">
                {categories.map((item, index) => (
                  <div
                    key={index}
                    className="list-item"
                    draggable
                    onDragStart={() => handleDragStart(item, index)}
                    onDragEnter={() =>
                      handleDragEnter(
                        index,
                        categories,
                        setCategories,
                        setCategoriesText
                      )
                    }
                    onDragOver={(e) => e.preventDefault()}
                  >
                    <i className="fa-solid fa-bars"></i>
                    <h3>{item}</h3>
                    <button
                      onClick={() =>
                        handleRemoveItem(index, categories, setCategories)
                      }
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="method" style={{ margin: "50px" }}>
            <div className="app">
              <h2>ToBelong</h2>

              <div className="input-group">
                <select
                  value={belongsText}
                  onChange={(e) => setBelongsText(e.target.value)}
                >
                  <option value="">Select an item...</option>
                  {items.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <button
                  className="btn"
                  onClick={() =>
                    handleAddText(
                      belongs,
                      setBelongs,
                      belongsText,
                      setBelongsText
                    )
                  }
                >
                  Add Text
                </button>
              </div>

              <div className="list-sort">
                {belongs.map((item, index) => (
                  <div
                    key={index}
                    className="list-item"
                    draggable
                    onDragStart={() => handleDragStart(item, index)}
                    onDragEnter={() =>
                      handleDragEnter(
                        index,
                        belongs,
                        setBelongs,
                        setBelongsText
                      )
                    }
                    onDragOver={(e) => e.preventDefault()}
                  >
                    <i className="fa-solid fa-bars"></i>
                    <h3>{item}</h3>
                    <button
                      onClick={() =>
                        handleRemoveItem(index, belongs, setBelongs)
                      }
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Drag;
