import {combineReducers, compose, legacy_createStore} from 'redux';
import {counterReducer} from './counter-reducer';
import {loadState, saveState} from '../utils/localStorage-utils';
import throttle from 'lodash.throttle';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const rootReducer = combineReducers({
    counter: counterReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(rootReducer, loadState(), composeEnhancers())

store.subscribe(throttle(() => {
    saveState({
        counter: {
            start: store.getState().counter.start,
            max: store.getState().counter.max,
            count: store.getState().counter.start,
            error: false,
            editMode: false
        }
    })
}, 1000))

export type AppStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store