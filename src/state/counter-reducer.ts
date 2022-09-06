export type CounterStateType = {
    start: number
    max: number
    count: number
    error: boolean
    editMode: boolean
}

type ActionType = ReturnType<typeof setStartAC>
    | ReturnType<typeof setMaxAC>
    | ReturnType<typeof incrementAC>
    | ReturnType<typeof resetToStartAC>
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof setEditModeAC>

const initialState: CounterStateType = {
    start: 0,
    max: 5,
    count: 0,
    error: false,
    editMode: false
}

export const counterReducer = (state: CounterStateType = initialState, action: ActionType): CounterStateType => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, count: state.count + 1}
        case 'RESET-TO-START':
            return {...state, count: state.start}
        case 'SET-START':
        case 'SET-MAX':
        case 'SET-ERROR':
        case 'SET-EDIT-MODE':
            return {...state, ...action.payload}
        default:
            return state
    }
}

export const incrementAC = () => ({type: 'INCREMENT'}) as const
export const resetToStartAC = () => ({type: 'RESET-TO-START'}) as const
export const setStartAC = (start: number) => ({type: 'SET-START', payload: {start}}) as const
export const setMaxAC = (max: number) => ({type: 'SET-MAX', payload: {max}}) as const
export const setErrorAC = (error: boolean) => ({type: 'SET-ERROR', payload: {error}}) as const
export const setEditModeAC = (editMode: boolean) => ({type: 'SET-EDIT-MODE', payload: {editMode}}) as const