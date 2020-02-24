import React from 'react';
import './Assests/css/style.css';
import Navigation from './Container/Navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducers from './Reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware()));

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App;


