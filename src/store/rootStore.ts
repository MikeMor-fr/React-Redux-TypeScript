import { createStore, combineReducers, applyMiddleware } from 'redux';
import { counterReducer } from './counter/CounterReducer';
import { createLogger } from 'redux-logger';

const logger = createLogger();

export const rootReducer = combineReducers({ counterReducer });

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(logger));