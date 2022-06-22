import React, { useEffect } from 'react';
import { useQuery } from 'react-query';

import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';

import Home from "./components/Map/Home";
import Header from "./components/Map/Header";
import Sidebar from "./components/Map/Sidebar";
import { useState } from "react";
import { Polygon } from "react-leaflet";
import '../src/App.css'

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const App = () => {
  const [ cartOpen, setCartOpen ] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
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
