import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import storeConfig from "./store/storeConfig"
import reportWebVitals from './reportWebVitals';
import Team from './components/team/team';

const store = storeConfig();

ReactDOM.render(  
<Provider store={store}>
  <BrowserRouter>
  <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/create" exact={true} component={Team} />
        <Route path="/team/:id" exact={true} component={Team} />
  </Switch>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
