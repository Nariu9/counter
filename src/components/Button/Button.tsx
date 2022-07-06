import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import classes from "./Button.module.css";


type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button = ({className, ...restProps}: DefaultButtonPropsType) => {

    return <button className={`${classes.myButton} ${className ? className : ''}`}
                   {...restProps}/>
};

// className={`${classes.myButton} ${props.className && props.className}`}  // если класс не приходит, остаётся строка false, что не ок!
// className={`${classes.myButton} ${props.className ? props.className : ''}`}
// className={props.className ? `${classes.myButton} ${props.className}` : `${classes.myButton}`}
