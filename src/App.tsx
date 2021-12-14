import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './Components/Counter/Counter';
import {Params} from './Components/Params/Params';
import {Routes, Route, NavLink} from 'react-router-dom';
import {Button} from './Components/Counter/Buttons/Button/Button';

export type maxValueForClickType = number | null

export function App() {
    let [num, setNum] = useState(0);
    let [maxValue, setMaxValue] = useState(0)
    let [startValue, setStartValue] = useState(0)
    let [error, setError] = useState<boolean>(false)
    let [startValueForClick, setStartValueForClick] = useState(0)
    let [maxValueForClick, setMaxValueForClick] = useState<maxValueForClickType>(null)

    const increment = () => {
        setNum(++num);
    }
    const reset = () => {
        setNum(startValue);
    }

    const setParams = () => {
        setStartValueForClick(startValue);
        setMaxValueForClick(maxValue);
        setNum(startValue);
    }


    useEffect(() => {
        if (maxValue < 0 || startValue < 0 || maxValue < startValue) {
            setError(true)
        }
    }, [maxValue, startValue])

    return (
        <div>
            <SuperButtonSetTheme/>
            <Routes>
                <Route path={'/twoScreen'} element={
                    <div className="wrapper">
                        <Counter
                            num={num}
                            setNum={setNum}
                            increment={increment}
                            reset={reset}
                            maxValue={maxValue}
                            startValueForClick={startValueForClick}
                            maxValueForClick={maxValueForClick}
                            error={error}
                        />
                        <Params
                            setParams={setParams}
                            error={error}
                            setError={setError}
                            startValue={startValue}
                            setStartValue={setStartValue}
                            setNum={setNum}
                            maxValue={maxValue}
                            setMaxValue={setMaxValue}
                            num={num}
                        />
                    </div>
                }/>
                <Route path={'/oneScreen'} element={
                    <div className="wrapper">
                        <Counter
                            num={num}
                            setNum={setNum}
                            increment={increment}
                            reset={reset}
                            maxValue={maxValue}
                            startValueForClick={startValueForClick}
                            maxValueForClick={maxValueForClick}
                            error={error}
                            setParams={setParams}
                        />
                    </div>
                }/>
            </Routes>
        </div>
    );
}

export function SuperButtonSetTheme() {
    return (
        <div className={'superButtons'}>
            <button><NavLink to={'/twoScreen'}
                             className={(isActive) => isActive ? 'activeNav' : 'navlink'}>twoScreen</NavLink></button>
            <button><NavLink to={'/oneScreen'}
                             className={(isActive) => isActive ? 'activeNav' : 'navlink'}>oneScreen</NavLink></button>
        </div>
    )
}