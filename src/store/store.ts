import {AnyAction, applyMiddleware, combineReducers, compose, legacy_createStore} from 'redux';
import {ActionTypes, counterReducer} from './counter-reducer';
// import {loadState} from './localStorage';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const rootReducer = combineReducers({
    counter: counterReducer
})

// const persistedState = loadState()      //сохраняемое состояние

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export type ReduxStateType = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<ReduxStateType, unknown, ActionTypes>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, ReduxStateType, unknown, AnyAction>