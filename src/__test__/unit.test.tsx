import React from 'react';
import { shallow } from 'enzyme';
import App from '../containers/App';
import HomePage from '../components/HomePage/HomePage';
import CounterButton from '../components/CounterButton/CounterButton';

describe('rendering components', () => {
  it('renders app without crashing', () => {
    shallow(<App />);
  });

  it('renders App component with homePage without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<HomePage />)).toEqual(true);
  });

  it('renders homePage component with counterButton without crashing', () => {
    const wrapper = shallow(<HomePage />);
    expect(
      wrapper.contains(
        <CounterButton color={'lightgreen'}>Increment</CounterButton>
      )
    ).toEqual(true);
  });
});
