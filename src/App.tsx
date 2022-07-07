import React, {useEffect, useState} from 'react';
import classes from "./App.module.css";
import {CounterSettings} from "./components/CounterSettings/CounterSettings";
import {Counter} from "./components/Counter/Counter";
import {Navigate, Route, Routes} from "react-router-dom";


function App() {

    const [start, setStart] = useState<number>(0)
    const [max, setMax] = useState<number>(0)
    const [count, setCount] = useState<number>(start)
    const [error, setError] = useState<string>('')
    const [editMode, setEditMode] = useState<boolean>(false)


    useEffect(() => {
        const startString = localStorage.getItem('startValue')
        startString && setStart(JSON.parse(startString))
        startString && setCount(JSON.parse(startString))
        const maxString = localStorage.getItem('maxValue')
        maxString && setMax(JSON.parse(maxString))
        //const countString = localStorage.getItem('startValue')
        //countString && setCount(JSON.parse(countString))
    }, [])

    useEffect(() => {
        localStorage.setItem('countValue', JSON.stringify(count))
    }, [start, max, count])

    //CounterSettings input callbacks
    const startValueHandler = (value: number) => {
        setEditMode(true)
        setStart(value)
        if (value < 0 || value >= max || max < 0) {
            setError('Go back to "set" and set the correct value!')
            return
        }
        setError('')
    }
    const maxValueHandler = (value: number) => {
        setEditMode(true)
        setMax(value)
        if (value < 0 || value <= start || start < 0) {
            setError('Go back to "set" and set the correct value!')
            return
        }
        setError('')
    }

    //CounterSettings button callbacks
    const setValuesHandler = () => {
        setCount(start)
        setEditMode(false)
        localStorage.setItem('startValue', JSON.stringify(start))
        localStorage.setItem('maxValue', JSON.stringify(max))
    }

    //Counter button callbacks
    const addOne = () => setCount(count + 1)
    const setToStart = () => setCount(start)

    return (
        <div className={classes.App}>
            <Routes>
                <Route path={'/'} element={<Navigate to={'/counter'}/>}/>

                <Route path={'/counter-settings'} element={<CounterSettings start={start}
                                                                            max={max}
                                                                            error={error}
                                                                            startValueHandler={startValueHandler}
                                                                            maxValueHandler={maxValueHandler}
                                                                            setValuesHandler={setValuesHandler}/>}/>
                <Route path={'/counter'} element={<Counter start={start}
                                                           max={max}
                                                           count={count}
                                                           error={error}
                                                           editMode={editMode}
                                                           addOne={addOne}
                                                           setToStart={setToStart}/>}/>
            </Routes>
        </div>
    );
}

export default App;

