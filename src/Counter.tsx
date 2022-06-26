import React from "react";
import classes from "./Counter.module.css";

type CounterType = {
    count: number
    max: number
}

export const Counter = (props: CounterType) => {
    return <div
        className={`${classes.counter} ${props.count === props.max && classes.red}`}>{props.count}</div>
}

// className={`${classes.counter} ${props.count === props.max && classes.red}`} // Anna's code
// className={props.count === props.max ? `${classes.red} ${classes.counter}` : `${classes.counter}`}  //my code
