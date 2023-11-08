import React from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./Closes.css";

const ItemType = "BOX";

const DraggableBox = ({ box, setBox }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { id: box },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        setBox(item.id);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        border: "solid 2px",
        width: "50px",
        margin: "10px",
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      {box}
    </div>
  );
};

const DropInput = ({
  name,
  accept,
  inputText,
  setInputText,
  droppedContent,
}) => {
  const [, drop] = useDrop({
    accept: accept,
    drop: (item) => {
      setInputText(item.id);
      droppedContent(item.id);
    },
  });

  return (
    <input
      ref={drop}
      style={{ margin: "0 5px", width: "100px" }}
      placeholder={`Drop here (${name})`}
      value={inputText}
      readOnly
    />
  );
};

export default function Closes() {
  const [box1, setBox1] = React.useState("dcd");
  const [box2, setBox2] = React.useState("dpd");
  const [box3, setBox3] = React.useState("dod");
  const [inputText1, setInputText1] = React.useState("");
  const [inputText2, setInputText2] = React.useState("");
  const [droppedContent, setDroppedContent] = React.useState("");

  const handleDroppedContent = (content) => {
    setDroppedContent(content);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <h1>2.Close</h1>
      <div style={{ display: "flex" }}>
        <DraggableBox box={box1} setBox={setBox1} />
        <DraggableBox box={box2} setBox={setBox2} />
        <DraggableBox box={box3} setBox={setBox3} />
      </div>
      <div>
        fox have to{" "}
        <DropInput
          name="input1"
          accept={ItemType}
          inputText={inputText1}
          setInputText={setInputText1}
          droppedContent={handleDroppedContent}
        />{" "}
        so that{" "}
        <DropInput
          name="input2"
          accept={ItemType}
          inputText={inputText2}
          setInputText={setInputText2}
          droppedContent={handleDroppedContent}
        />{" "}
        can stay alive
      </div>
    </DndProvider>
  );
}
