import{
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import React, {Component} from 'react'
import HomePage from './views/HomePage';
import POSPage from './views/POSPage';
import React, { useState } from "react";
import axios from "axios";

//https://levelup.gitconnected.com/how-to-start-every-full-stack-project-7c92e07f8693
const onClickButton = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_ROUTE}/api`
  );
  return response;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/POS" element={<POSPage/>}></Route>
      </Routes>
    </Router>
 )
}


export default App;


//ORIGINAL
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
