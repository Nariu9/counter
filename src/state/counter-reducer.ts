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
    max: 0,
    count: 0,
    error: false,
    editMode: false
}

export const counterReducer = (state: CounterStateType = initialState, action: ActionType): CounterStateType => {
    switch (action.type) {
        case 'SET-START':
            return {...state, start: action.start}
        case 'SET-MAX':
            return {...state, max: action.max}
        case 'INCREMENT':
            return {...state, count: state.count + 1}
        case 'RESET-TO-START':
            return {...state, count: state.start}
        case 'SET-ERROR':
            return {...state, error: action.error}
        case 'SET-EDIT-MODE':
            return {...state, editMode: action.editMode}
        default:
            return state
    }
}

export const setStartAC = (start: number) => ({type: 'SET-START', start}) as const
export const setMaxAC = (max: number) => ({type: 'SET-MAX', max}) as const
export const incrementAC = () => ({type: 'INCREMENT'}) as const
export const resetToStartAC = () => ({type: 'RESET-TO-START'}) as const
export const setErrorAC = (error: boolean) => ({type: 'SET-ERROR', error}) as const
export const setEditModeAC = (editMode: boolean) => ({type: 'SET-EDIT-MODE', editMode}) as const