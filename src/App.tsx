import React, {useEffect, useState} from 'react';
import classes from "./App.module.css";
import {Button} from "./components/Button/Button";
import {Counter} from "./components/Counter/Counter";
import {NumberInput} from "./components/NumberInput/NumberInput";


function App() {

    const [start, setStart] = useState<number>(0)
    const [max, setMax] = useState<number>(0)
    const [count, setCount] = useState<number>(start)
    const [error, setError] = useState<string>('')
    const [settings, setSettings] = useState<boolean>(true)


    useEffect(() => {
        const startString = localStorage.getItem('startValue')
        startString && setStart(JSON.parse(startString))
        const maxString = localStorage.getItem('maxValue')
        maxString && setMax(JSON.parse(maxString))
        const countString = localStorage.getItem('startValue')
        countString && setCount(JSON.parse(countString))
    }, [])

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(start))
        localStorage.setItem('maxValue', JSON.stringify(max))
        localStorage.setItem('countValue', JSON.stringify(count))
    }, [start, max, count])


    const addOne = () => {
        if (count < max) {
            setCount(count + 1)
        }
    }

    const setToStart = () => setCount(start)

    const setValuesHandler = () => {
        setCount(start)
        setSettings(false)
    }

    const maxValueHandler = (value: number) => {
        setSettings(true)
        setMax(value)
        if (value < 0 || value <= start) {
            setError('Incorrect value!')
            return
        }
        setError('')
    }

    const startValueHandler = (value: number) => {
        setSettings(true)
        setStart(value)
        if (value < 0 || value >= max) {
            setError('Incorrect value!')
            return
        }
        setError('')
    }

    const counterContent = error ? <span className={classes.errorMessage}>{error}</span> :
        settings ? <span className={classes.message}>{'enter values and press "set"'}</span> :
            <Counter count={count} max={max}/>

    return (
        <div className={classes.App}>
            <div className={classes.container}>
                <div className={`${classes.content} ${classes.values}`}>
                    <div className={classes.value}>
                        <span>max value:</span>
                        <NumberInput value={max} callback={maxValueHandler} className={max < 0 || max <= start ? classes.inputError : ''}/>
                    </div>
                    <div className={classes.value}>
                        <span>start value:</span>
                        <NumberInput value={start} callback={startValueHandler} className={start < 0 || start >= max ? classes.inputError : ''}/>
                    </div>
                </div>
                <div className={classes.buttonContainer}>
                    <Button title={'set'} callback={setValuesHandler} disabled={!!error || start > max || start < 0 || !settings }/>
                </div>
            </div>


            <div className={classes.container}>
                <div className={classes.content}>
                    {counterContent}
                </div>
                <div className={classes.buttonContainer}>
                    <Button title={'inc'} callback={addOne} disabled={count === max || settings}/>
                    <Button title={'reset'} callback={setToStart} disabled={count === start || settings}/>
                </div>
            </div>

        </div>
    );
}

export default App;

