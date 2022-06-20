import React, { useEffect } from 'react';
import Home from "./components/Map/Home";
import Header from "./components/Map/Header";
import Sidebar from "./components/Map/Sidebar";
import { useState } from "react";
import { Polygon } from "react-leaflet";
import '../src/App.css'

const App = () => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <div className="App">
        <Header />
        {show ? <Sidebar /> : null}
        <div className="btnsidebar">
          <button className="btn" onClick={() => setShow(!show)}>
            - ซ่อนตาราง -
          </button>
        </div>
        <Home />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Header />
        {show ? <Sidebar /> : null}
        <div className="btnsidebar">
          <button className="btn" onClick={() => setShow(!show)}>
            - แสดงตาราง -
          </button>
        </div>
        <Home />
      
      </div>
    );
  }
}

export default App;
