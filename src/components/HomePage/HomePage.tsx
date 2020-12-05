import React, { Component } from 'react';
import CounterButton from '../CounterButton/CounterButton';

export default class HomePage extends Component {
  render() {
    return <CounterButton color={'lightgreen'}>Increment</CounterButton>;
  }
}
