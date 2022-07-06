import React from "react";
import {Count} from "./Count/Count";
import {Button} from "../Button/Button";
import classes from "../../App.module.css";

type CounterPropsType = {
    start: number
    max: number
    count: number
    error: string
    editMode: boolean
    addOne: () => void
    setToStart: () => void
}
export const Counter = ({
                            start,
                            max,
                            count,
                            error,
                            editMode,
                            addOne,
                            setToStart
                        }: CounterPropsType) => {

    const counterContent = error
        ? <span className={classes.errorMessage}>{error}</span>
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
                        callback={addOne}
                        disabled={count === max || editMode || !!error}/>
                <Button title={'reset'}
                        callback={setToStart}
                        disabled={count === start || editMode || !!error}/>
            </div>
        </div>
    )
}