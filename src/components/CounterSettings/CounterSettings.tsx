import {NumberInput} from '../NumberInput/NumberInput';
import {Button} from '../Button/Button';
import React, {useState} from 'react';
import classes from './CounterSettings.module.css';
import styleContainers from '../../common/styles/Container.module.css'
import {useSelector} from 'react-redux';
import {ReduxStateType} from '../../store/store';
import {
    CounterStateType,
    resetAC,
    setErrorAC,
    setMaxToLSTC,
    setStartToLSTC,
    toggleSettingsAC
} from '../../store/counter-reducer';
import {useAppDispatch} from '../../store/hooks';

export const CounterSettings: React.FC = () => {

    const state = useSelector<ReduxStateType, CounterStateType>(state => state.counter)
    const {start, max, error} = state
    const dispatch = useAppDispatch()
    const [_start, _setStart] = useState(start)
    const [_max, _setMax] = useState(max)

    const onSetValues = () => {
        dispatch(resetAC())
        dispatch(toggleSettingsAC(false))
        dispatch(setMaxToLSTC(_max))
        dispatch(setStartToLSTC(_start))
    }

    const maxValueHandler = (value: number) => {
        _setMax(value)
        if (value < 0 || value <= _start || _start < 0) {
            !error && dispatch(setErrorAC(true))
            return
        }
        error && dispatch(setErrorAC(false))
    }
    const startValueHandler = (value: number) => {
        _setStart(value)
        if (value < 0 || value >= _max) {
            !error && dispatch(setErrorAC(true))
            return
        }
        error && dispatch(setErrorAC(false))
    }
    return (
        <div className={styleContainers.container}>
            <div className={`${styleContainers.content} ${classes.values}`}>
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
            <div className={styleContainers.buttonContainer}>
                <Button onClick={onSetValues} disabled={error}>set</Button>
            </div>
        </div>
    )
}