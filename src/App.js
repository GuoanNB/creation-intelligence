import './App.css';
import 'antd/dist/antd.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./containers/Main";
import React from 'react';
import TopTraffic from "./containers/TopTraffic";

const App = () => {
  return (
    <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/hackthon-demo/" element={<Main />}>
        </Route>
        <Route path="/hackthon-demo/tops" element={<TopTraffic />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  );
}


export default App;
