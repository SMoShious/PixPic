import Editor from './components/editor';
import './App.css';
import React from 'react';


function App() {
  return (
    <React.Fragment>
      <div className='App'>
        <Editor />
      </div>
      <p className='madeBy'>By: Seyyed Mohammad Shobeiry</p>
    </React.Fragment>
  );
}

export default App;
