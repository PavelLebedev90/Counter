import React, {useEffect} from 'react';
import './App.css';
import {Counter} from './Components/Counter/Counter';
import {Params} from './Components/Params/Params';
import {NavLink, Route, Routes} from 'react-router-dom';
import {
    setErrorAC,
    setMaxNumAC,
    setMaxValueAC,
    setMaxValueForClickAC,
    setNumAC,
    setStartValueAC,
    setStartValueForClickAC, StateType
} from './BLL/Reducer';
import {useDispatch, useSelector} from 'react-redux';
import {RootReducerType} from './BLL/store';


export type maxValueForClickType = number | null


export function App() {

    const state = useSelector<RootReducerType, StateType>(state => state.counter)
    const dispatch = useDispatch()

    const increment = () => {
        dispatch(setNumAC(state.num+1))
        //for THUNK
        //dispatch(setStateToLocalStorageTC())
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
//for THUNK
/*    useEffect(() => {
        dispatch(getStateFromLocalStorageTC())
    }, [])*/

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
                            increment={increment}
                            reset={reset}
                            maxNum={state.maxNum}
                            startValueForClick={state.startValueForClick}
                            maxValueForClick={state.maxValueForClick}
                            error={state.error}
                        />
                        <Params
                            setParams={setParams}
                            error={state.error}
                            setError={setErrorAC}
                            startValue={state.startValue}
                            setStartValue={setStartValueAC}
                            maxValue={state.maxValue}
                            setMaxValue={setMaxValueAC}
                        />
                    </div>
                }/>
                <Route key={'oneScreen'} path={'/oneScreen'} element={
                    <div className="wrapper">
                        {/*<Counter*/}
                        {/*    num={state.num}*/}
                        {/*    increment={increment}*/}
                        {/*    reset={reset}*/}
                        {/*    maxNum={state.maxNum}*/}
                        {/*    startValueForClick={state.startValueForClick}*/}
                        {/*    maxValueForClick={state.maxValueForClick}*/}
                        {/*    error={state.error}*/}
                        {/*/>*/}
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