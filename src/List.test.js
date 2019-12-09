import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

//smoke test
it('renders without crashing', () => {
   
    const div = document.createElement('div');
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
})

//snapshot test
it('renders the UI as expected', () => {
    const tree = renderer
        .create(<List key={1}
            header="First list"
            cards={[ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ]}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});