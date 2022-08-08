import React from 'react';
import classes from './App.module.css';
import {CounterSettings} from './components/CounterSettings/CounterSettings';
import {Counter} from './components/Counter/Counter';


function App() {
    return (
        <div className={classes.App}>
            <CounterSettings/>
            <Counter/>
        </div>
    );
}

export default App;

