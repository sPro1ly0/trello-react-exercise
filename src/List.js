import React from 'react';
import Card from './Card';
import './List.css';
//props are header and cards
function List(props) {
  //for testing, when using .map(), use conditional rendering places && places.map()
    return (
      <section className='List'>
        <header className='List-header'>
          <h2>{props.header}</h2>
        </header>
        <div className='List-cards'>
          {props.cards && props.cards.map((card) =>
            <Card
              key={card.id}
              title={card.title}
              content={card.content}
            />
          )}
          <button
            type='button'
            className='List-add-button'
          >
            + Add Random Card
          </button>
        </div>
      </section>
    )
  }

  export default List;