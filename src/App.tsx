import React from 'react';
import classes from './App.module.css';
import {CounterSettings} from './components/CounterSettings/CounterSettings';
import {Counter} from './components/Counter/Counter';
import {useSelector} from 'react-redux';
import {ReduxStateType} from './store/store';


function App() {

    const editMode = useSelector<ReduxStateType, boolean>(state => state.counter.editMode)

    return (
        <div className={classes.App}>
            {editMode ? <CounterSettings/> : <Counter/>}
        </div>
    );
}

export default App;

