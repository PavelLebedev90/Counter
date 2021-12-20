import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './Components/Counter/Counter';
import {Params} from './Components/Params/Params';
import {Routes, Route, NavLink} from 'react-router-dom';
import {Button} from './Components/Counter/Buttons/Button/Button';

export type maxValueForClickType = number | null

export function App() {
    let [num, setNum] = useState(0)
    let [maxNum, setMaxNum] = useState(0)
    let [startValue, setStartValue] = useState(0)
    let [maxValue, setMaxValue] = useState(0)
    let [error, setError] = useState<boolean>(false)
    let [startValueForClick, setStartValueForClick] = useState(0)
    let [maxValueForClick, setMaxValueForClick] = useState<maxValueForClickType>(null)

    const increment = () => {
        setNum(++num);
    }
    const reset = () => {
        setNum(startValueForClick);
        /*setNum(startValue)*/
    }

    const setParams = () => {
        setStartValueForClick(startValue);
        setMaxValueForClick(maxValue);
        setNum(startValue);
        setMaxNum(maxValue);
    }
    useEffect(()=>{
        let numAsString = localStorage.getItem('num');
        let maxNumAsString = localStorage.getItem('maxNum');
        let startValueAsString = localStorage.getItem('startValue');
        let maxValueAsString = localStorage.getItem('maxValue');
        let startValueForClickAsString = localStorage.getItem('startValueForClick');
        let maxValueForClickAsString = localStorage.getItem('maxValueForClick');
        if(numAsString){
            let newNum = JSON.parse(numAsString);
            setNum(newNum);
        }
        if(startValueAsString){
            setStartValue(JSON.parse(startValueAsString))
        }
        if(maxValueAsString){
            setMaxValue(JSON.parse(maxValueAsString))
        }
        if(startValueForClickAsString){
            setStartValueForClick(JSON.parse(startValueForClickAsString))
        }
        if(maxValueForClickAsString){
            setMaxValueForClick(JSON.parse(maxValueForClickAsString))
        }


    },[])
    useEffect(() => {
        localStorage.setItem('num', JSON.stringify(num))
        localStorage.setItem('maxNum', JSON.stringify(maxNum))
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValueForClick', JSON.stringify(startValueForClick))
        localStorage.setItem('maxValueForClick', JSON.stringify(maxValueForClick))
    }, [num, startValue, maxValue, startValueForClick, maxValueForClick])



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
                            maxNum={maxNum}
                            startValueForClick={startValueForClick}
                            maxValueForClick={maxValueForClick}
                            error={error}
                            startValue={startValue}
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
                <Route key={"oneScreen"} path={'/oneScreen'} element={
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
                            maxNum={maxNum}
                            startValue={startValue}
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