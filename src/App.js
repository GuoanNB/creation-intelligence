
import './App.css';
import React from 'react';
import Main from "./containers/Main";
import { BrowserRouter } from "react-router-dom";
import 'antd/dist/antd.css';

const App = () => {
  return (
    <React.StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </React.StrictMode>
  );
}


export default App;
