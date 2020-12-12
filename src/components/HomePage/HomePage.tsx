import React, { Component } from 'react';
import CounterButton from '../CounterButton/CounterButton';

interface Props {
  increment: () => void;
  decrement: () => void;
  count: number;
}

export default class HomePage extends Component {
  render(): JSX.Element {
    const { count, increment, decrement } = this.props as Props;

    return (
      <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '2rem' }}>
        <CounterButton handleClick={increment} color={'lightgreen'}>
          Increment
        </CounterButton>
        <span>{count}</span>
        <CounterButton handleClick={decrement} color={'orange'}>
          Decrement
        </CounterButton>
      </div>
    );
  }
}
