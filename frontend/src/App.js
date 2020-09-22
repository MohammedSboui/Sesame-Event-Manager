import React from 'react';

import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';

import { makeStyles } from '@material-ui/core/styles';
import Home from './components/Home';
import Footer from './components/Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    paddingTop:'20%',
    paddingLeft : '42%',
    color : "White",
  },
}));
function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
