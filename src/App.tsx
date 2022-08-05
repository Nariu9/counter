import React, {useEffect, useState} from 'react';
import classes from './App.module.css';
import {CounterSettings} from './components/CounterSettings/CounterSettings';
import {Counter} from './components/Counter/Counter';


function App() {

    const [start, setStart] = useState<number>(0)
    const [max, setMax] = useState<number>(0)
    const [count, setCount] = useState<number>(start)
    const [error, setError] = useState<boolean>(false)
    const [editMode, setEditMode] = useState<boolean>(false)


    /*useEffect(() => {                                         // localStorage
        const startString = localStorage.getItem('startValue')
        startString && setStart(JSON.parse(startString))
        startString && setCount(JSON.parse(startString))
        const maxString = localStorage.getItem('maxValue')
        maxString && setMax(JSON.parse(maxString))
    }, [])*/

    //CounterSettings input callbacks
    const startValueHandler = (value: number) => {
        setStart(value)
        if (value < 0 || value >= max) {
            setError(true)
            return
        }
       error && setError(false)
    }

    const maxValueHandler = (value: number) => {
        setMax(value)
        if (value < 0 || value <= start || start < 0) {
            setError(true)
            return
        }
        error && setError(false)
    }

    //CounterSettings button callbacks
    /*const setValuesHandler = () => {
        setCount(start)
        setEditMode(false)
        localStorage.setItem('startValue', JSON.stringify(start))
        localStorage.setItem('maxValue', JSON.stringify(max))
    }*/

    const setValuesHandler = () => {
        setCount(start)
        setEditMode(false)
    }

    //Counter button callbacks
    const addOne = () => setCount(count + 1)
    const resetCount = () => setCount(start)


    return (
        <div className={classes.App}>
            {editMode
                ? <CounterSettings start={start}
                                   max={max}
                                   error={error}
                                   startValueHandler={startValueHandler}
                                   maxValueHandler={maxValueHandler}
                                   setValuesHandler={setValuesHandler}
                                   setEditMode={setEditMode}/>
                : <Counter start={start}
                           max={max}
                           count={count}
                           addOne={addOne}
                           resetCount={resetCount}
                           setEditMode={setEditMode}/>}

        </div>
    );
}

export default App;

