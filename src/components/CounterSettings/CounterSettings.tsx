import {NumberInput} from '../NumberInput/NumberInput';
import {Button} from '../Button/Button';
import React from 'react';
import classes from './CounterSettings.module.css';
import styleContainers from '../../common/styles/Container.module.css'

type CounterSettingsPropsType = {
    start: number
    max: number
    error: boolean
    startValueHandler: (value: number) => void
    maxValueHandler: (value: number) => void
    setValuesHandler: () => void
    setEditMode: (editMode: boolean) => void
}
export const CounterSettings: React.FC<CounterSettingsPropsType> = ({
                                                                        start,
                                                                        max,
                                                                        error,
                                                                        startValueHandler,
                                                                        maxValueHandler,
                                                                        setValuesHandler,
                                                                        setEditMode
                                                                    }) => {

    const onSetValues = () => {
        setValuesHandler()
        setEditMode(false)
    }

    return (
        <div className={styleContainers.container}>
            <div className={`${styleContainers.content} ${classes.values}`}>
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
            <div className={styleContainers.buttonContainer}>
                <Button onClick={onSetValues} disabled={error}>set</Button>
            </div>
        </div>
    )
}