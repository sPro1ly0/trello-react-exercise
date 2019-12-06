import React, {Component} from 'react'; //what is this??
import List from './List';
import './App.css';

class App extends Component { //what?? Creating Component Class
  //create defaultProps property for class
  //then assign an object to that property
  //The keys of that object are the props you want to have defaults for 
  //and the values are the default values you want to assign
  static defaultProps = { 
    store: {
      lists: [],
      allCards: {}
    }
  };
//so the App component has a props store: Object
//which is the dummy object that was given
//In a class, props aren't a parameter anymore, need to access
//props using this.props
  render() { //render is a method, only method required for class components
    const {store} = this.props //why???
    return (
      <main className='App'>
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {store.lists.map(list => (
            <List 
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
            />
          ))}
        </div>
      </main>
    );
  };
};

export default App;
