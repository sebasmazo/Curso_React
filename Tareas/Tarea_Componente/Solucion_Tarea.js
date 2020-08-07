//INDEX.JS
import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
import './index.css';





const divroot = document.querySelector('#app');
ReactDOM.render(<CounterApp value={123} />, divroot);

//CounterApp.js 
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {

    return (
        <Fragment>
            <h1>CounterApp</h1>
            <h2>{value}</h2>
        </Fragment>
    )
}
CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;