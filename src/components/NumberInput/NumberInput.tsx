import React, {ChangeEvent} from 'react';
import classes from "./NumberInput.module.css";

type NumberInputPropsType = {
    value:number
    callback:(value:number)=>void
    className?:string
}

export const NumberInput = ({value, callback, className}:NumberInputPropsType) => {

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
      callback(Number(e.currentTarget.value))
    }

    return <input value={value} type="number" onChange={onChangeHandler} className={className ? className : classes.input}/>
};

