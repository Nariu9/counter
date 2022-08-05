import React from 'react';
import {Count} from './Count/Count';
import {Button} from '../Button/Button';
import classes from '../../App.module.css';

type CounterPropsType = {
    start: number
    max: number
    count: number
    addOne: () => void
    setToStart: () => void
    setEditMode: (editMode: boolean) => void
}
export const Counter: React.FC<CounterPropsType> = ({
                                                        start,
                                                        max,
                                                        count,
                                                        addOne,
                                                        setToStart,
                                                        setEditMode
                                                    }) => {
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <Count count={count} max={max}/>
            </div>
            <div className={classes.buttonContainer}>
                <Button onClick={addOne}
                        disabled={count === max}>inc</Button>
                <Button onClick={setToStart}
                        disabled={count === start}>reset</Button>
                <Button onClick={() => setEditMode(true)}>set</Button>
            </div>
        </div>
    )
}