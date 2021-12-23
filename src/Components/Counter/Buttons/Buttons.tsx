import React from "react";
import {Button} from "./Button/Button";
import {maxValueForClickType} from '../../../App';
import {Routes,Route} from 'react-router-dom';

type ButtonsType = {
    increment: () => void
    reset: () => void
    num: number
    maxValue: number
    startValueForClick: number
    maxValueForClick:maxValueForClickType
    error:boolean
    setParams?: ()=> void
    maxNum:number
    startValue:number
}

export function Buttons(props:ButtonsType) {

    const disableForMore = props.num === props.maxValueForClick || props.maxValueForClick === null || props.error;
    const disableForReset = props.error || props.num === props.startValueForClick;

    return (
        <div className="buttons">
            <Button className={props.error || disableForMore?"buttonDis" : "button"} disabled = {disableForMore} onClick={props.increment}>more</Button>
            <Button className={props.error || disableForReset?"buttonDis":"button"} disabled = {disableForReset} onClick={props.reset}>reset</Button>
        </div>
    )
}

