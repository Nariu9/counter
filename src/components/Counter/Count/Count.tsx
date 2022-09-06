import React, {useEffect} from 'react';
import classes from './Count.module.css';
import {useAppDispatch} from '../../../store/hooks';
import {getMaxFromLSTC, getStartFromLSTC} from '../../../store/counter-reducer';

type CountPropsType = {
    count: number
    max: number
}

export const Count: React.FC<CountPropsType> = ({count, max}) => {

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getStartFromLSTC())
        dispatch(getMaxFromLSTC())
    }, [dispatch])

    return <span
        className={`${classes.counter} ${count === max && classes.red}`}>{count}</span>
}

// className={`${classes.counter} ${props.count === props.max && classes.red}`} // Anna's code
// className={props.count === props.max ? `${classes.red} ${classes.counter}` : `${classes.counter}`}  //my code
