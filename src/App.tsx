import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Button} from "./Button";

function App() {

    const start = 0
    const max = 5


    const [count, setCount] = useState<number>(start)

    const addOne = () => {
        if (count < max) {
            setCount(count + 1)
        }
    }

    const setToStart = () => setCount(start)

    return (
        <div className="App">
            <div className={"container"}>
                <Counter count={count} max={max}/>
                <div className={"buttonContainer"}>
                    <Button title={'inc'} callback={addOne} disabled={count === max}/>
                    <Button title={'reset'} callback={setToStart} disabled={count === start}/>
                </div>
            </div>
        </div>
    );
}

export default App;

