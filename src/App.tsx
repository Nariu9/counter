import React from 'react';
import classes from './App.module.css';
import {CounterSettings} from './components/CounterSettings/CounterSettings';
import {Counter} from './components/Counter/Counter';
import {useSelector} from 'react-redux';
import {ReduxStateType} from './store/store';
import {
    CounterStateType,
} from './store/counter-reducer';


function App() {

    const state = useSelector<ReduxStateType, CounterStateType>(state => state.counter)

    return (
        <div className={classes.App}>
            {state.editMode ? <CounterSettings/> : <Counter/>}
        </div>
    );
}

export default App;

