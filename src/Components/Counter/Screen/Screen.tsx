import React from "react";
import {maxValueForClickType} from '../../../App';

type ScreenType = {
    num: number
    startValueForClick: number
    maxValue:number
    maxValueForClick:maxValueForClickType
    error:boolean
}

export function Screen(props:ScreenType) {
    return (


        <div className={ props.num === props.maxValueForClick? "screenMax": props.error? "error" : "screen"}>
            {props.error? "not valid value" : props.num}
        </div>
    )
}