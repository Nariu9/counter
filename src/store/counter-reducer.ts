type CounterStateType = {
    start: number
    max: number
    count: number
    error: boolean
    editMode: boolean
}
type ActionType = ReturnType<typeof setStartAC>
    | ReturnType<typeof setMaxAC>
    | ReturnType<typeof incrementAC>
    | ReturnType<typeof resetAC>
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof toggleSettingsAC>

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
            return {...state, start: action.value}
        case 'SET-MAX':
            return {...state, max: action.value}
        case 'INCREMENT':
            return {...state, count: action.value + 1}
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

export const setStartAC = (value: number) => ({type: 'SET-START', value}) as const
export const setMaxAC = (value: number) => ({type: 'SET-MAX', value}) as const
export const incrementAC = (value: number) => ({type: 'INCREMENT', value}) as const
export const resetAC = () => ({type: 'RESET'}) as const
export const setErrorAC = (isError: boolean) => ({type: 'SET-ERROR', isError}) as const
export const toggleSettingsAC = (toggleSettings: boolean) => ({type: 'TOGGLE-SETTINGS', toggleSettings}) as const
