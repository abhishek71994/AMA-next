import React from 'react';
import ReactDOM from 'react-dom';

const App = ()=>{
  return(
    <hi>Hello React!</hi>
  )
};

const rootDiv = document.getElementById("root");

ReactDOM.render(<App/>,rootDiv);