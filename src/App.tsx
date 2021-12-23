import React, {useEffect, useReducer} from 'react';
import './App.css';
import {Counter} from './Components/Counter/Counter';
import {Params} from './Components/Params/Params';
import {NavLink, Route, Routes} from 'react-router-dom';
import {
    reducer,
    setErrorAC,
    setMaxNumAC,
    setMaxValueAC,
    setMaxValueForClickAC,
    setNumAC,
    setStartValueAC,
    setStartValueForClickAC
} from './Reducer';


export type maxValueForClickType = number | null



export function App() {

    let [state, dispatch] = useReducer(reducer, {
        num: 0,
        maxNum: 0,
        startValue: 0,
        maxValue: 0,
        startValueForClick: 0,
        maxValueForClick: null,
        error: false
    })


    const increment = () => {
        dispatch(setNumAC(++state.num))
    }
    const reset = () => {
        dispatch(setNumAC(state.startValueForClick));
    }

    const setParams = () => {
        dispatch(setStartValueForClickAC(state.startValue))
        dispatch(setMaxValueForClickAC(state.maxValue))
        dispatch(setNumAC(state.startValue))
        dispatch(setMaxNumAC(state.maxValue))

    }
    useEffect(() => {
        let numAsString = localStorage.getItem('num');
        let maxNumAsString = localStorage.getItem('maxNum');
        let startValueAsString = localStorage.getItem('startValue');
        let maxValueAsString = localStorage.getItem('maxValue');
        let startValueForClickAsString = localStorage.getItem('startValueForClick');
        let maxValueForClickAsString = localStorage.getItem('maxValueForClick');
        if (numAsString) {
            let newNum = JSON.parse(numAsString);
            dispatch(setNumAC(newNum))
        }
        if (maxNumAsString) {
            dispatch(setMaxNumAC(JSON.parse(maxNumAsString)))
        }
        if (startValueAsString) {
            dispatch(setStartValueAC(JSON.parse(startValueAsString)))
        }
        if (maxValueAsString) {
            dispatch(setMaxValueAC(JSON.parse(maxValueAsString)))
        }
        if (startValueForClickAsString) {
            dispatch(setStartValueForClickAC(JSON.parse(startValueForClickAsString)))
        }
        if (maxValueForClickAsString) {
            dispatch(setMaxValueForClickAC(JSON.parse(maxValueForClickAsString)))
        }


    }, [])


    useEffect(() => {
        localStorage.setItem('num', JSON.stringify(state.num))
        localStorage.setItem('maxNum', JSON.stringify(state.maxNum))
        localStorage.setItem('startValue', JSON.stringify(state.startValue))
        localStorage.setItem('maxValue', JSON.stringify(state.maxValue))
        localStorage.setItem('startValueForClick', JSON.stringify(state.startValueForClick))
        localStorage.setItem('maxValueForClick', JSON.stringify(state.maxValueForClick))
    }, [state])


    useEffect(() => {
        if (state.maxValue < 0 || state.startValue < 0 || state.maxValue < state.startValue) {
            dispatch(setErrorAC(true))
        }
    }, [state.maxValue, state.startValue])

    return (
        <div>
            <SuperButtonSetTheme/>
            <Routes>
                <Route path={'/twoScreen'} element={
                    <div className="wrapper">
                        <Counter
                            num={state.num}
                            setNum={setNumAC}
                            increment={increment}
                            reset={reset}
                            maxValue={state.maxValue}
                            maxNum={state.maxNum}
                            startValueForClick={state.startValueForClick}
                            maxValueForClick={state.maxValueForClick}
                            error={state.error}
                            startValue={state.startValue}
                            dispatch={dispatch}
                        />
                        <Params
                            setParams={setParams}
                            error={state.error}
                            setError={setErrorAC}
                            startValue={state.startValue}
                            setStartValue={setStartValueAC}
                            setNum={setNumAC}
                            maxValue={state.maxValue}
                            setMaxValue={setMaxValueAC}
                            num={state.num}
                            dispatch={dispatch}
                        />
                    </div>
                }/>
                <Route key={'oneScreen'} path={'/oneScreen'} element={
                    <div className="wrapper">
                        <Counter
                            num={state.num}
                            setNum={setNumAC}
                            increment={increment}
                            reset={reset}
                            maxValue={state.maxValue}
                            maxNum={state.maxNum}
                            startValueForClick={state.startValueForClick}
                            maxValueForClick={state.maxValueForClick}
                            error={state.error}
                            startValue={state.startValue}
                            dispatch={dispatch}
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