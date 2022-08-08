import {ReduxStateType} from './store';

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state')
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (error) {
        return undefined
    }
}

/*export const saveState = (state: ReduxStateType) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch (error) {
        console.log(error)
        //Ignore write errors.
    }
}*/

export const saveState = (state: {start: number, max: number}) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch (error) {
        console.log(error)
        //Ignore write errors.
    }
}