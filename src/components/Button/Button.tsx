import React from 'react';
import classes from "./Button.module.css";

type ButtonPropsType = {
    title: string
    callback: () => void
    disabled?: boolean
    className?: string
}

export const Button = ({title, callback, disabled, className}: ButtonPropsType) => {

    return <button onClick={callback}
                   disabled={disabled}
                   className={`${classes.myButton} ${className ? className : ''}`}>{title}</button>
};

// className={`${classes.myButton} ${props.className && props.className}`}  // если класс не приходит, остаётся строка false, что не ок!
// className={`${classes.myButton} ${props.className ? props.className : ''}`}
// className={props.className ? `${classes.myButton} ${props.className}` : `${classes.myButton}`}
