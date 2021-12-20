import React from "react";
import {maxValueForClickType} from '../../../App';

type ScreenType = {
    num: number
    startValueForClick: number
    maxValue:number
    maxValueForClick:maxValueForClickType
    error:boolean
    maxNum:number
}

export function Screen(props:ScreenType) {
    const screenClass = props.num === props.maxNum? "screenMax": "screen";
    return (
        <div className={screenClass}>
            {props.error? <span className={"error"}>not valid value</span> : <span className={"spanNum"}>{props.num}</span>}
        </div>
    )
}