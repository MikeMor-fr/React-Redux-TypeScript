import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './HomePage';

describe('Basic test', () => {
  it('Renders the HomePage component without crashing', () => {
    shallow(<HomePage />);
  });
});
