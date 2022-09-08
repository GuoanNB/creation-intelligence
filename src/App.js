import './App.css';
import 'antd/dist/antd.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./containers/Main";
import React from 'react';
import TopTraffic from "./containers/TopTraffic";
import Portal from "./containers/Portal";
const App = () => {
  return (
    <React.StrictMode>
    <BrowserRouter  basename="/hackthon-demo">
      <Routes>
        <Route path="/" element={<Portal />}/>
        <Route path="/Intelligence" element={<Main />}/>
        <Route path="/tops" element={<TopTraffic />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  );
}


export default App;
