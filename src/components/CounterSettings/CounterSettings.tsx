import {NumberInput} from '../NumberInput/NumberInput';
import {Button} from '../Button/Button';
import React from 'react';
import classes from './CounterSettings.module.css';
import styleContainers from '../../common/styles/Container.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {ReduxStateType} from '../../store/store';
import {
    CounterStateType,
    resetAC,
    setErrorAC,
    setMaxAC,
    setStartAC,
    toggleSettingsAC
} from '../../store/counter-reducer';

export const CounterSettings: React.FC = () => {

    const onSetValues = () => {
        dispatch(resetAC())
        dispatch(toggleSettingsAC(false))
    }
    const state = useSelector<ReduxStateType, CounterStateType>(state => state.counter)
    const {start, max, error, editMode, ...restData} = state
    const dispatch = useDispatch()

    const maxValueHandler = (value: number) => {
        dispatch(setMaxAC(value))
        if (value < 0 || value <= start || start < 0) {
            dispatch(setErrorAC(true))
            return
        }
        error && dispatch(setErrorAC(false))
    }
    const startValueHandler = (value: number) => {
        dispatch(setStartAC(value))
        if (value < 0 || value >= max) {
            dispatch(setErrorAC(true))
            return
        }
        error && dispatch(setErrorAC(false))
    }
    return (
        <div className={styleContainers.container}>
            <div className={`${styleContainers.content} ${classes.values}`}>
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
            <div className={styleContainers.buttonContainer}>
                <Button onClick={onSetValues} disabled={error}>set</Button>
            </div>
        </div>
    )
}