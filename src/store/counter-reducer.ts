import {AppThunk} from './store';

const initialState = {
    start: 0,
    max: 0,
    count: 0,
    error: false,
    editMode: false
}

export const counterReducer = (state: CounterStateType = initialState, action: ActionTypes): CounterStateType => {
    switch (action.type) {
        case 'SET-START':
            return {...state, start: action.value}
        case 'SET-MAX':
            return {...state, max: action.value}
        case 'INCREMENT':
            return {...state, count: state.count + 1}
        case 'RESET' :
            return {...state, count: state.start}
        case 'SET-ERROR':
            return {...state, error: action.isError}
        case 'TOGGLE-SETTINGS':
            return {...state, editMode: action.toggleSettings}
        default:
            return state
    }
}

// actions
export const setStartAC = (value: number) => ({type: 'SET-START', value}) as const
export const setMaxAC = (value: number) => ({type: 'SET-MAX', value}) as const
export const incrementAC = () => ({type: 'INCREMENT'}) as const
export const resetAC = () => ({type: 'RESET'}) as const
export const setErrorAC = (isError: boolean) => ({type: 'SET-ERROR', isError}) as const
export const toggleSettingsAC = (toggleSettings: boolean) => ({type: 'TOGGLE-SETTINGS', toggleSettings}) as const

// thunk
export const setStartToLSTC = (value: number): AppThunk => (dispatch) => {
    localStorage.setItem('startValue', JSON.stringify(value))
    dispatch(setStartAC(value))
}
export const setMaxToLSTC = (value: number): AppThunk => (dispatch) => {
    localStorage.setItem('maxValue', JSON.stringify(value))
    dispatch(setMaxAC(value))
}
export const getStartFromLSTC = ():AppThunk => (dispatch)=> {
    const startString = localStorage.getItem('startValue')
    startString && dispatch(setStartAC(JSON.parse(startString)))
    dispatch(resetAC())
}
export const getMaxFromLSTC = ():AppThunk => (dispatch)=> {
    const maxString = localStorage.getItem('maxValue')
    maxString && dispatch(setMaxAC(JSON.parse(maxString)))
}

// types
export type ActionTypes = ReturnType<typeof setStartAC>
    | ReturnType<typeof setMaxAC>
    | ReturnType<typeof incrementAC>
    | ReturnType<typeof resetAC>
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof toggleSettingsAC>

export type CounterStateType = typeof initialState