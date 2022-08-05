import React from 'react';
import {Count} from './Count/Count';
import {Button} from '../Button/Button';
import styleContainers from  '../../common/styles/Container.module.css'

type CounterPropsType = {
    start: number
    max: number
    count: number
    addOne: () => void
    resetCount: () => void
    setEditMode: (editMode: boolean) => void
}
export const Counter: React.FC<CounterPropsType> = ({
                                                        start,
                                                        max,
                                                        count,
                                                        addOne,
                                                        resetCount,
                                                        setEditMode
                                                    }) => {
    return (
        <div className={styleContainers.container}>
            <div className={styleContainers.content}>
                <Count count={count} max={max}/>
            </div>
            <div className={styleContainers.buttonContainer}>
                <Button onClick={addOne}
                        disabled={count === max}>inc</Button>
                <Button onClick={resetCount}
                        disabled={count === start}>reset</Button>
                <Button onClick={() => setEditMode(true)}>set</Button>
            </div>
        </div>
    )
}