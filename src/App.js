import './App.css';
import { Route,Routes, Link } from "react-router-dom";
import Close from "./render/Close.jsx";
import Drag from './render/Drag';
import Comph from './render/Comph';
import home from './Builder/Home';
import Home from './Builder/Home';
import Nav from './Nav';




function App() {
  return (
    <>
      <div className="App">
        <div>
          <Nav/>
        </div>
        <Routes>
          <Route path="/close" element={<Close />} />
          <Route path="/drag" element={<Drag />} />
          <Route path="/comph" element={<Comph />} />
          <Route path="/home" element={<Home/>} />\
        </Routes>
      </div>
    </>
  );
}

export default App;
