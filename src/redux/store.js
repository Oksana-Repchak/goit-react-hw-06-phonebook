import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const inicialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

const reducer = (state = inicialState, action) => state;

const store = createStore(reducer, composeWithDevTools());

export default store;
