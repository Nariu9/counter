import React from "react";
import {Count} from "./Count/Count";
import {Button} from "../Button/Button";
import classes from "../../App.module.css";
import {useNavigate} from "react-router-dom";

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

    const navigate = useNavigate()
    const counterContent = error
        ? <span className={classes.errorMessage}>{error}</span>
        : editMode
            ? <span className={classes.message}>{'go back and press "set"'}</span>
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
                <Button onClick={()=>navigate('/counter-settings')}>set</Button>
            </div>
        </div>
    )
}