import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css'

import {BrowserRouter,Route,Switch} from 'react-router-dom'

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Addevent from './components/Addevent';
import Event from './components/Event';
ReactDOM.render(
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path='/event/:id' component = {Event} />
        <Route path='/addevent' component = {Addevent} />
        <Route path='/login' component = {Login} />
        <Route path='/Register' component = {Register}/>
        <Route path='/' component={Home}/>
      </Switch>
      
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
