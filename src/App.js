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
const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}

class App extends Component { //what?? Creating Component Class
  //create defaultProps property for class
  //then assign an object to that property
  //The keys of that object are the props you want to have defaults for 
  //and the values are the default values you want to assign

  //if store prop is not passed, it will default it to store here

  state = {
      lists: [
        {
          id: '1',
          header: 'First list',
          cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
        },
        {
          id: '2',
          header: 'Second list',
          cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
        },
        {
          id: '3',
          header: 'Third list',
          cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
        },
        {
          id: '4',
          header: 'Fourth list',
          cardIds: [ 'l', 'm' ],
        },
      ],
      allCards: {
        'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
        'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
        'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
        'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
        'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
        'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
        'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
        'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
        'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
        'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
        'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
        'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
        'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
      }
  };

  

  handleDeleteCard = (cardId) => {
    const {lists, allCards} = this.state;
    const newList = lists.map(list => ({
        ...list,
        cardIds: list.cardIds.filter(id => id !== cardId)
      }));

    const newCard = omit(allCards, cardId);

    this.setState({
      lists: newList,
      allCards: newCard
    })
  };

  handleAddCard = (listId) => {
    const {lists, allCards} = this.state;
    const newCard = newRandomCard()

    const newList = lists.map(list => {
      if (list.id === listId) {
	    return {
          ...list,
          cardIds: [...list.cardIds, newCard.id]
        };
      }
      return list;
    })

    this.setState({
        lists: newList,
        allCards: {
          ...allCards,
          [newCard.id]: newCard
        }
    })
  };
  
//so the App component has a props store: Object
//which is the dummy object that was given
//In a class, props aren't a parameter anymore, need to access
//props using this.props
  render() { //render is a method, only method required for class components
    const {lists} = this.state
    const {allCards} = this.state
    return (
      <>
      <main className='App'>
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {lists.map(list => (
            <List 
              key={list.id}
              id={list.id}
              header={list.header}
              cards={list.cardIds.map(id => allCards[id])}
              onDeleteCard = {this.handleDeleteCard}
              onAddCard = {this.handleAddCard}
            />
          ))}
        </div>
      </main>
      </>
    );
  };
};

//This also works:
//this.props.store.lists
//this.props.store.allCards

export default App;
