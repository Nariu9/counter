import classes from "../../App.module.css";
import {NumberInput} from "../NumberInput/NumberInput";
import {Button} from "../Button/Button";
import React from "react";
import {useNavigate} from "react-router-dom";

type CounterSettingsPropsType = {
    start: number
    max: number
    error: string
    startValueHandler: (value: number) => void
    maxValueHandler: (value: number) => void
    setValuesHandler: () => void
}
export const CounterSettings = ({
                                    start,
                                    max,
                                    error,
                                    startValueHandler,
                                    maxValueHandler,
                                    setValuesHandler
                                }: CounterSettingsPropsType) => {

    const navigate = useNavigate()

    const onSetValues = () => {
        setValuesHandler()
        navigate('/counter')
    }

    return (
        <div className={classes.container}>
            <div className={`${classes.content} ${classes.values}`}>
                <div className={classes.value}>
                    <span>max value:</span>
                    <NumberInput value={max}
                                 callback={maxValueHandler}
                                 className={max < 0 || max <= start ? classes.inputError : ''}/>
                </div>
                <div className={classes.value}>
                    <span>start value:</span>
                    <NumberInput value={start}
                                 callback={startValueHandler}
                                 className={start < 0 || start >= max ? classes.inputError : ''}/>
                </div>
            </div>
            <div className={classes.buttonContainer}>
                <Button onClick={onSetValues} disabled={!!error}>set</Button>
            </div>
        </div>
    )
}