import classes from '../../App.module.css';
import {NumberInput} from '../NumberInput/NumberInput';
import {Button} from '../Button/Button';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../state/store';
import {
    CounterStateType,
    resetToStartAC,
    setEditModeAC,
    setErrorAC,
    setMaxAC,
    setStartAC
} from '../../state/counter-reducer';

export const CounterSettings = () => {

    const counterState = useSelector<AppStateType, CounterStateType>(state => state.counter)
    const {start, max, error, editMode} = counterState
    const dispatch = useDispatch()
    const [_start, _setStart] = useState<number>(start)
    const [_max, _setMax] = useState<number>(max)

    const maxValueHandler = (value: number) => {
        _setMax(value)
        !editMode && dispatch(setEditModeAC(true))
        if (value > 0 && value > _start && _start >= 0) {
            error && dispatch(setErrorAC(false))
        } else {
            !error && dispatch(setErrorAC(true))
        }
    }
    const startValueHandler = (value: number) => {
        _setStart(value)
        !editMode && dispatch(setEditModeAC(true))
        if (value >= 0 && value < _max) {
            error && dispatch(setErrorAC(false))
        } else {
            !error && dispatch(setErrorAC(true))
        }
    }
    const setValuesHandler = () => {
        dispatch(setMaxAC(_max))
        dispatch(setStartAC(_start))
        dispatch(resetToStartAC())
        dispatch(setEditModeAC(false))
    }


    return (
        <div className={classes.container}>
            <div className={`${classes.content} ${classes.values}`}>
                <div className={classes.value}>
                    <span>max value:</span>
                    <NumberInput value={_max}
                                 callback={maxValueHandler}
                                 className={_max < 0 || _max <= _start ? classes.inputError : ''}/>
                </div>
                <div className={classes.value}>
                    <span>start value:</span>
                    <NumberInput value={_start}
                                 callback={startValueHandler}
                                 className={_start < 0 || _start >= _max ? classes.inputError : ''}/>
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