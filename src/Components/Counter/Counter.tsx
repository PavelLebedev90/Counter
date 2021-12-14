import React from "react";
import {Screen} from "./Screen/Screen";
import {Buttons} from "./Buttons/Buttons";
import {maxValueForClickType} from '../../App';

type CounterType = {
    num: number
    maxValue: number
    setNum: (num: number) => void
    increment: () => void
    reset: () => void
    startValueForClick: number
    maxValueForClick: maxValueForClickType
    error: boolean
    setParams?: ()=> void
}

export function Counter(props: CounterType) {
    return (
        <div className="App">
            <Screen num={props.num}
                    startValueForClick={props.startValueForClick}
                    maxValue={props.maxValue}
                    maxValueForClick={props.maxValueForClick}
                    error={props.error}
            />
            <Buttons increment={props.increment}
                     reset = {props.reset}
                     error={props.error}
                     num = {props.num}
                     maxValue={props.maxValue}
                     startValueForClick={props.startValueForClick}
                     maxValueForClick={props.maxValueForClick}
                     setParams={props.setParams}
            />
        </div>
    )
}


