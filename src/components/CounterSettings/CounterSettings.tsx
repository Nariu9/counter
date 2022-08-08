import classes from "../../App.module.css";
import {NumberInput} from "../NumberInput/NumberInput";
import {Button} from "../Button/Button";
import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {ReduxStateType} from '../../state/store';
import {
    CounterStateType,
    resetToStartAC,
    setEditModeAC,
    setErrorAC,
    setMaxAC,
    setStartAC
} from '../../state/counter-reducer';

export const CounterSettings = () => {
    const counterState = useSelector<ReduxStateType, CounterStateType>(state => state.counter)
    const {start, max, error, editMode} = counterState
    const dispatch = useDispatch()

    const maxValueHandler = (value: number) => {
        dispatch(setEditModeAC(true))
        dispatch(setMaxAC(value))
        if (value < 0 || value <= start || start < 0) {
            dispatch(setErrorAC(true))
            return
        }
        counterState.error && dispatch(setErrorAC(false))
    }
    const startValueHandler = (value: number) => {
        dispatch(setEditModeAC(true))
        dispatch(setStartAC(value))
        if (value < 0 || value >= max) {
            dispatch(setErrorAC(true))
            return
        }
        error && dispatch(setErrorAC(false))
    }
    const setValuesHandler = () => {
        dispatch(resetToStartAC())
        dispatch(setEditModeAC(false))

    }


    return (
        <div className={classes.container}>
            <div className={`${classes.content} ${classes.values}`}>
                <div className={classes.value}>
                    <span>max value:</span>
                    <NumberInput value={max}
                                 callback={maxValueHandler}
                                 className={max < 0 || max <= start ? classes.inputError : ''}/>
                </div>
                <div className={classes.value}>
                    <span>start value:</span>
                    <NumberInput value={start}
                                 callback={startValueHandler}
                                 className={start < 0 || start >= max ? classes.inputError : ''}/>
                </div>
            </div>
            <div className={classes.buttonContainer}>
                <Button title={'set'}
                        callback={setValuesHandler}
                        disabled={error || !editMode}/>
            </div>
        </div>
    )
}