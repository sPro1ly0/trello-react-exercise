import React, {Component} from 'react'; //one default export(React), but many named exports{Component} e.g.import A, { myA, Something } from './A'
import List from './List'; //default imports only work if their is a default export
import './App.css'; 
//We can also assign them all different names when importing:
//import X, { myA as myX, Something as XSomething } from './A'

//React lets you define components as classes or functions. Components defined as classes currently provide more features
//Classes are a way of reusing methods
//because a class that extends another class inherits all of it's methods
//Class is a JS thing not React
//React requires that a class component extend the Component class,
//so it's necessary to import it
class App extends Component { //what?? Creating Component Class
  //create defaultProps property for class
  //then assign an object to that property
  //The keys of that object are the props you want to have defaults for 
  //and the values are the default values you want to assign

  //if store prop is not passed, it will default it to store here
  static defaultProps = { 
    store: { //1 prop store key: object
      lists: [], //key lists
      allCards: {} //key allCards
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
//This also works:
//this.props.store.lists
//this.props.store.allCards

export default App;
