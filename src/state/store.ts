import {combineReducers, compose, legacy_createStore} from 'redux';
import {counterReducer} from './counter-reducer';
import {loadState} from './localStorage';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const rootReducer = combineReducers({
    counter: counterReducer
})

const persistedState = loadState()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(rootReducer, persistedState, composeEnhancers())

export type ReduxStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store