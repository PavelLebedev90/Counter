import React from 'react';
import {Screen} from './Screen/Screen';
import {Buttons} from './Buttons/Buttons';
import {maxValueForClickType} from '../../App';

type CounterType = {
    num: number
    increment: () => void
    reset: () => void
    startValueForClick: number
    maxValueForClick: maxValueForClickType
    error: boolean
    maxNum:number
}

export function Counter(props: CounterType) {
    return (
        <div className="App">
            {/*<Screen num={props.num}*/}
            {/*        error={props.error}*/}
            {/*        maxNum={props.maxNum}*/}
            {/*/>*/}
            {/*<Buttons increment={props.increment}*/}
            {/*         reset = {props.reset}*/}
            {/*         error={props.error}*/}
            {/*         num = {props.num}*/}
            {/*         startValueForClick={props.startValueForClick}*/}
            {/*         maxValueForClick={props.maxValueForClick}*/}
            {/*/>*/}
        </div>
    )
}


