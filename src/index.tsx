import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {store} from './state/store';
import {saveState} from './state/localStorage';
import throttle from 'lodash.throttle';

store.subscribe(throttle(()=>{
    saveState({
        start: store.getState().counter.start,
        max: store.getState().counter.max
    })
}, 1000))


/*store.subscribe(throttle(()=>{
    saveState({
        counter: {
            start: store.getState().counter.start,
            max: store.getState().counter.max,
            count: store.getState().counter.start,
            error: false,
            editMode: false
        }
    })
}, 1000))*/

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
