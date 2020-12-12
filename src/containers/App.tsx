import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import HomePage from '../components/HomePage/HomePage';
import { AppState } from '../store/rootStore';
import { incrementCount, decrementCount } from '../store/counter/CounterAction';

interface AppProps {
  increment: () => void;
  decrement: () => void;
}

class App extends Component {
  render(): JSX.Element {
    return <HomePage {...this.props} />;
  }
}

const mapStateToProps = (state: AppState) => ({
  count: state.counterReducer.count,
});

const mapDispatchToProps = (dispatch: Dispatch): AppProps => ({
  increment: () => dispatch(incrementCount()),
  decrement: () => dispatch(decrementCount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
