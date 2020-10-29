import React, {useEffect} from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
  // axios.get('http://localhost:31085').then(response=>{
  //   console.log(response);
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // axios.get('http://localhost:30194').then(response=>{
  // console.log(response);
  // }).catch((error) => {
  //   console.log(error);
  // });
  axios.get('http://auth.com/authtest').then(response=>{
    console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  axios.get('http://auth.com/comparison').then(response=>{
  console.log(response);
  }).catch((error) => {
    console.log(error);
  });
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
