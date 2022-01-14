import React from 'react';
import {Button} from './Button/Button';
import {maxValueForClickType} from '../../../App';
import {Routes, Route} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {RootReducerType} from '../../../BLL/store';
import {setNumAC, StateType} from '../../../BLL/Reducer';



export function Buttons() {
    const state = useSelector<RootReducerType, StateType>(state => state.counter)
    const dispatch = useDispatch()
    const disableForMore = state.num === state.maxValueForClick || state.maxValueForClick === null || state.error;
    const disableForReset = state.error || state.num === state.startValueForClick;

    return (
        <div className="buttons">
            <Button className={state.error || disableForMore ? 'buttonDis' : 'button'} disabled={disableForMore}
                    onClick={()=>  dispatch(setNumAC(state.num+1))}>more</Button>
            <Button className={state.error || disableForReset ? 'buttonDis' : 'button'} disabled={disableForReset}
                    onClick={()=>  dispatch(setNumAC(state.startValueForClick))}>reset</Button>
        </div>
    )
}

