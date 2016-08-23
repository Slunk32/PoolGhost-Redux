import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux'; // attaches store to react components
import {Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css'; // webpack imports this
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// arguments here could be used to get default state (maybe from db later)
const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
