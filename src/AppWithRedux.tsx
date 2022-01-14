import React, {useEffect} from 'react';
import './App.css';
import {NavLink, Route, Routes} from 'react-router-dom';
import {setErrorAC, StateType} from './BLL/Reducer';
import {useDispatch, useSelector} from 'react-redux';
import {RootReducerType} from './BLL/store';
import {CounterWithRedux} from './Components/Counter/CounterWithRedux';
import {ParamsWithRedux} from './Components/Params/ParamsWithRedux';


export type maxValueForClickType = number | null


export function AppWithRedux() {

    const state = useSelector<RootReducerType, StateType>(state => state.counter)
    const dispatch = useDispatch()


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
                        <CounterWithRedux/>
                        <ParamsWithRedux/>
                    </div>
                }/>
                <Route key={'oneScreen'} path={'/oneScreen'} element={
                    <div className="wrapper">
                        <CounterWithRedux/>
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