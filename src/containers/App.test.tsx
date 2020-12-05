import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Basic test', () => {
  it('Renders the App component without crashing', () => {
    shallow(<App />);
  });
});
