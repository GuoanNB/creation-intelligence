import './App.css';
import 'antd/dist/antd.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./containers/Main";
import React from 'react';
import TopTraffic from "./containers/TopTraffic";
import Web3 from './components/Web3';

const App = () => {
  return (
    <React.StrictMode>
    <BrowserRouter  basename="/hackthon-demo">
      <Routes>
        <Route path="/" element={<Main />}>
        </Route>
        <Route path="/tops" element={<TopTraffic />} />
        <Route path="/web3" element={<Web3 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  );
}


export default App;
