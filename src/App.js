import React from 'react';
import TrelloStore from './store';
import List from './composition/List';
import './App.css';

function App(props) {
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">

      </div>
    </main>
  );
}

export default App;
