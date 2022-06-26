import React from 'react';
import classes from "./Button.module.css";

type ButtonPropsType = {
    title: string
    callback: () => void
    disabled?: boolean
    className?: string
}

export const Button = (props: ButtonPropsType) => {

    const onclickHandler = () => {
        props.callback()
    }


    return (
        <button onClick={onclickHandler}
                className={`${classes.myButton} ${props.className ? props.className : ''}`}
                disabled={props.disabled}>{props.title}
        </button>
    );
};

// className={`${classes.myButton} ${props.className && props.className}`}  // если класс не приходит, остаётся строка false, что не ок!
// className={`${classes.myButton} ${props.className ? props.className : ''}`}
// className={props.className ? `${classes.myButton} ${props.className}` : `${classes.myButton}`}
