/*
import {setMaxAC, setStartAC} from './counter-reducer';

export type StartMaxStateType = {
    start: number
    max: number
}

type ActionType = ReturnType<typeof setStartAC>
    | ReturnType<typeof setMaxAC>

const initialState: StartMaxStateType = {
    start: 0,
    max: 0,
}

export const startMaxReducer = (state: StartMaxStateType = initialState, action: ActionType): StartMaxStateType => {
    switch (action.type) {
        case 'SET-START':
            return {...state, start: action.start}
        case 'SET-MAX':
            return {...state, max: action.max}
        default:
            return state
    }
}
*/
export default 15
