import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Basic test', () => {
  it('Renders the App component', () => {
    const app = shallow(<App />);
    expect(app).toMatchSnapshot();
  });
});
