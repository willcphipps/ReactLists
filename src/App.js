import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  const [color, setColor] = useState("");
  const [boxes, setBoxes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const i = boxes.length;
    let box = { color }
    setBoxes(oldBoxes => [...oldBoxes, box]);
    setColor("");
  }
  const handleColor = (e) => {
    setColor(e.target.value)
  }
  const deleteBox = (e, i) => {
    const tempBox = [...boxes]
    tempBox.splice(i, 1);

    setBoxes(tempBox);
  }
  return (
    <div className="App column">
      <div>
        <Form
          color={ color }
          handleColor={handleColor}
          addColor={handleSubmit}
        />
        
        <div className="d-flex flex-wrap justify-content-center">
          {boxes.map((boxen, i) =>
            <div
              key = {i}
              onClick={(e) => deleteBox(e, i)}
              className="nes-container"
              style={{
                backgroundColor: boxen.color,
                height: "200px",
                width: "200px",
                margin: "5px"
              }}>
            </div >
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
