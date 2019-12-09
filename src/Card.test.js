import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

//smoke test
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
});

//Snapshot test
it('renders the UI as expected', () => {
    const tree = renderer
        .create(<Card key="a"
            title="First card"
            content="lorem ipsum"/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});