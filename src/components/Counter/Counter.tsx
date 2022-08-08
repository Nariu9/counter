import React from 'react';
import {Count} from './Count/Count';
import {Button} from '../Button/Button';
import classes from '../../App.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {ReduxStateType} from '../../state/store';
import {CounterStateType, incrementAC, resetToStartAC} from '../../state/counter-reducer';

export const Counter = () => {

    const counterState = useSelector<ReduxStateType, CounterStateType>(state => state.counter)
    const {start, max, count, error, editMode} = counterState
    const dispatch = useDispatch()

    const increment = () => dispatch(incrementAC())
    const resetToStart = () => dispatch(resetToStartAC())


    const counterContent = error
        ? <span className={classes.errorMessage}>{'Incorrect value!'}</span>
        : editMode
            ? <span className={classes.message}>{'enter values and press "set"'}</span>
            : <Count count={count} max={max}/>

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                {counterContent}
            </div>
            <div className={classes.buttonContainer}>
                <Button title={'inc'}
                        callback={increment}
                        disabled={count === max || editMode || error}/>
                <Button title={'reset'}
                        callback={resetToStart}
                        disabled={count === start || editMode || error}/>
            </div>
        </div>
    )
}