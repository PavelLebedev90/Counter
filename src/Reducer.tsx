import {maxValueForClickType} from './App';

const SETNUM = 'SETNUM'
const SETMAXNUM = 'SETMAXNUM'
const SETSTARTVALUE = 'SETSTARTVALUE'
const SETMAXVALUE = 'SETMAXVALUE'
const SETSTARTVALUEFORCLICK = 'SETSTARTVALUEFORCLICK'
const SETMAXVALUEFORCLICK = 'SETMAXVALUEFORCLICK'
const SETERROR = 'SETERROR'
type StateType = {
    num: number
    maxNum: number
    startValue: number
    maxValue: number
    startValueForClick: number
    maxValueForClick: maxValueForClickType
    error: boolean
}
export type ActionType =
    ReturnType<typeof setNumAC>
    | ReturnType<typeof setMaxNumAC>
    | ReturnType<typeof setStartValueAC>
    |
    ReturnType<typeof setMaxValueAC>
    | ReturnType<typeof setStartValueForClickAC>
    | ReturnType<typeof setMaxValueForClickAC>
    |
    ReturnType<typeof setErrorAC>
export const reducer = (state: StateType, action: ActionType):StateType => {
    switch (action.type) {
        case SETSTARTVALUE:
            return {...state, startValue: action.value}
        case SETMAXVALUE:
            return {...state, maxValue: action.value}
        case SETSTARTVALUEFORCLICK:
            return {...state, startValueForClick: state.startValue}
        case SETMAXVALUEFORCLICK:
            return {...state, maxValueForClick: state.maxValue}
        case SETNUM:
            return {...state, num: action.value}
        case SETMAXNUM:
            return {...state, maxNum: action.value}
        case SETERROR:
            return {...state, error: action.value}
        default:
            throw new Error()
    }
}
export const setNumAC = (value: number) => ({type: SETNUM, value} as const)
export const setMaxNumAC = (value: number) => ({type: SETMAXNUM, value} as const)
export const setStartValueAC = (value: number) => ({type: SETSTARTVALUE, value} as const)
export const setMaxValueAC = (value: number) => ({type: SETMAXVALUE, value} as const)
export const setStartValueForClickAC = (value: number) => ({type: SETSTARTVALUEFORCLICK, value} as const)
export const setMaxValueForClickAC = (value: number) => ({type: SETMAXVALUEFORCLICK, value} as const)
export const setErrorAC = (value: boolean) => ({type: SETERROR, value} as const)