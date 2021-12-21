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
/*    let [num, setNum] = useState(0)
    let [maxNum, setMaxNum] = useState(0)
    let [startValue, setStartValue] = useState(0)
    let [maxValue, setMaxValue] = useState(0)
    let [error, setError] = useState<boolean>(false)
    let [startValueForClick, setStartValueForClick] = useState(0)
    let [maxValueForClick, setMaxValueForClick] = useState<maxValueForClickType>(null)
    let [error, setError] = useState<boolean>(false)*/

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
        /*setNum(++num);*/

        dispatch(setNumAC(++state.num))
    }
    const reset = () => {
        dispatch(setNumAC(state.startValueForClick));
        /*setNum(startValue)*/
    }

    const setParams = () => {
        dispatch(setStartValueForClickAC(state.startValue))
        dispatch(setMaxValueForClickAC(state.maxValue))
        dispatch(setNumAC(state.startValue))
        dispatch(setMaxNumAC(state.maxValue))

 /*       setStartValueForClick(startValue);
        setMaxValueForClick(maxValue);
        setNum(startValue);
        setMaxNum(maxValue);*/
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
           /* setNum(newNum);*/
            dispatch(setNumAC(newNum))
        }
        if (maxNumAsString) {
            /*setStartValue(JSON.parse(startValueAsString))*/
            dispatch(setMaxNumAC(JSON.parse(maxNumAsString)))
        }
        if (startValueAsString) {
            /*setStartValue(JSON.parse(startValueAsString))*/
            dispatch(setStartValueAC(JSON.parse(startValueAsString)))
        }
        if (maxValueAsString) {
           /* setMaxValue(JSON.parse(maxValueAsString))*/
            dispatch(setMaxValueAC(JSON.parse(maxValueAsString)))
        }
        if (startValueForClickAsString) {
            /*setStartValueForClick(JSON.parse(startValueForClickAsString))*/
            dispatch(setStartValueForClickAC(JSON.parse(startValueForClickAsString)))
        }
        if (maxValueForClickAsString) {
            /*setMaxValueForClick(JSON.parse(maxValueForClickAsString))*/
            dispatch(setMaxValueForClickAC(JSON.parse(maxValueForClickAsString)))
        }


    }, [])
/*    useEffect(() => {
        localStorage.setItem('num', JSON.stringify(num))
        localStorage.setItem('maxNum', JSON.stringify(maxNum))
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValueForClick', JSON.stringify(startValueForClick))
        localStorage.setItem('maxValueForClick', JSON.stringify(maxValueForClick))
    }, [num, startValue, maxValue, startValueForClick, maxValueForClick])*/

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
           /* setError(true)*/
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
              /*              num={num}
                            setNum={setNum}
                            increment={increment}
                            reset={reset}
                            maxValue={maxValue}
                            maxNum={maxNum}
                            startValueForClick={startValueForClick}
                            maxValueForClick={maxValueForClick}
                            error={error}
                            startValue={startValue}*/
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
              /*              setParams={setParams}
                            error={error}
                            setError={setError}
                            startValue={startValue}
                            setStartValue={setStartValue}
                            setNum={setNum}
                            maxValue={maxValue}
                            setMaxValue={setMaxValue}
                            num={num}*/
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
{/*                <Route key={'oneScreen'} path={'/oneScreen'} element={
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
                }/>*/}
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