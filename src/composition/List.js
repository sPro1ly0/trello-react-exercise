import React from 'react';
import Card from './composition/Card';
import './List.css';

function List() {
    return (
        <section className="List">
            <header className="List-header">
                <h2>First List</h2>
            </header>
            <div className="List-cards">
                <Card />
            </div>
        </section>
    )
}

export default List;