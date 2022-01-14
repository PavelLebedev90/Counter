import React from "react";
import {maxValueForClickType} from '../../../App';
import {useDispatch, useSelector} from 'react-redux';
import {RootReducerType} from '../../../BLL/store';
import {StateType} from '../../../BLL/Reducer';



export function Screen() {
    const state = useSelector<RootReducerType, StateType>(state => state.counter)

    const screenClass = state.num === state.maxNum? "screenMax": "screen";
    return (
        <div className={screenClass}>
            {state.error? <span className={"error"}>not valid value</span> : <span className={"spanNum"}>{state.num}</span>}
        </div>
    )
}