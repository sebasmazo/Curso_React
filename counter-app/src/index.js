import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
import './index.css';





const divroot = document.querySelector('#app');
ReactDOM.render( <CounterApp value = {0}/>,divroot);