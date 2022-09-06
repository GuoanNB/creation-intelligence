
import './App.css';
import React from 'react';
import Main from "./containers/Main";
import TopTraffic from "./containers/TopTraffic";

import { BrowserRouter, Routes, Route  } from "react-router-dom";
import 'antd/dist/antd.css';

const App = () => {
  return (
    <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
        </Route>
        <Route path="/tops" element={<TopTraffic />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  );
}


export default App;
