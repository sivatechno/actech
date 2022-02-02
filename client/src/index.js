import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from './store/reducers/rootReducers';
const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



