import React from 'react';
import ReactDom from 'react-dom';
import { Router, Switch, Route} from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/App';
// import Jokes from './components/Jokes';
import './index.css';

ReactDom.render(<App></App>, document.getElementById('root'));