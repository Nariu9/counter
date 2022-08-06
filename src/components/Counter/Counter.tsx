import React from 'react';
import {Count} from './Count/Count';
import {Button} from '../Button/Button';
import styleContainers from '../../common/styles/Container.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {ReduxStateType} from '../../store/store';
import {CounterStateType, incrementAC, resetAC, toggleSettingsAC} from '../../store/counter-reducer';

export const Counter: React.FC = () => {
    const state = useSelector<ReduxStateType, CounterStateType>(state => state.counter)
    const {start, max, count, ...restData} = state
    const dispatch = useDispatch()
    const incrementCount = () => dispatch(incrementAC(count))
    const resetCount = () => dispatch(resetAC())
    const onEditMode = () => dispatch(toggleSettingsAC(true))

    return (
        <div className={styleContainers.container}>
            <div className={styleContainers.content}>
                <Count count={count} max={max}/>
            </div>
            <div className={styleContainers.buttonContainer}>
                <Button onClick={incrementCount}
                        disabled={count === max}>inc</Button>
                <Button onClick={resetCount}
                        disabled={count === start}>reset</Button>
                <Button onClick={onEditMode}>set</Button>
            </div>
        </div>
    )
}