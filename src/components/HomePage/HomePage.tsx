import React, { Component } from 'react';
import CounterButton from '../CounterButton/CounterButton';

export default class HomePage extends Component {
  render(): JSX.Element {
    return (
      <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '2rem' }}>
        <CounterButton color={'lightgreen'}>Increment</CounterButton>
        <span>0</span>
        <CounterButton color={'orange'}>Decrement</CounterButton>
      </div>
    );
  }
}
