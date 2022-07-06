import React from "react";
import {Count} from "./Count/Count";
import {Button} from "../Button/Button";
import classes from "../../App.module.css";
import {NavLink} from "react-router-dom";

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
            ? <span className={classes.message}>{'press "set" and set the start and maximum value'}</span>
            : <Count count={count} max={max}/>

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                {counterContent}
            </div>
            <div className={classes.buttonContainer}>
                <Button onClick={addOne}
                        disabled={count === max || editMode || !!error}>inc</Button>
                <Button onClick={setToStart}
                        disabled={count === start || editMode || !!error}>reset</Button>
                <Button><NavLink to={'/counter-settings'}>set</NavLink></Button>
            </div>
        </div>
    )
}