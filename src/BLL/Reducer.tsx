import {maxValueForClickType} from '../App';

const SETNUM = 'SETNUM'
const SETMAXNUM = 'SETMAXNUM'
const SETSTARTVALUE = 'SETSTARTVALUE'
const SETMAXVALUE = 'SETMAXVALUE'
const SETSTARTVALUEFORCLICK = 'SETSTARTVALUEFORCLICK'
const SETMAXVALUEFORCLICK = 'SETMAXVALUEFORCLICK'
const SETERROR = 'SETERROR'
export type StateType = {
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

const initialState: StateType = {
    num: 0,
    maxNum: 0,
    startValue: 0,
    maxValue: 0,
    startValueForClick: 0,
    maxValueForClick: null,
    error: false
};


export const counterReducer = (state: StateType = initialState, action: ActionType):StateType => {
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
            return state
    }
}
export const setNumAC = (value: number) => ({type: SETNUM, value} as const)
export const setMaxNumAC = (value: number) => ({type: SETMAXNUM, value} as const)
export const setStartValueAC = (value: number) => ({type: SETSTARTVALUE, value} as const)
export const setMaxValueAC = (value: number) => ({type: SETMAXVALUE, value} as const)
export const setStartValueForClickAC = (value: number) => ({type: SETSTARTVALUEFORCLICK, value} as const)
export const setMaxValueForClickAC = (value: number) => ({type: SETMAXVALUEFORCLICK, value} as const)
export const setErrorAC = (value: boolean) => ({type: SETERROR, value} as const)





//THUNK
/*
export const setStateToLocalStorageTC = ()=>(dispatch:Dispatch, getState:()=>RootReducerType)=>{
    localStorage.setItem('num', JSON.stringify(getState().counter.num+1))
    localStorage.setItem('maxNum', JSON.stringify(getState().counter.maxNum))
    localStorage.setItem('startValue', JSON.stringify(getState().counter.startValue))
    localStorage.setItem('maxValue', JSON.stringify(getState().counter.maxValue))
    localStorage.setItem('startValueForClick', JSON.stringify(getState().counter.startValueForClick))
    localStorage.setItem('maxValueForClick', JSON.stringify(getState().counter.maxValueForClick))
    dispatch(setNumAC(getState().counter.num + 1 ))
}

export const getStateFromLocalStorageTC = ()=>(dispatch:Dispatch)=>{
    let numAsString = localStorage.getItem('num');
    let maxNumAsString = localStorage.getItem('maxNum');
    let startValueAsString = localStorage.getItem('startValue');
    let maxValueAsString = localStorage.getItem('maxValue');
    let startValueForClickAsString = localStorage.getItem('startValueForClick');
    let maxValueForClickAsString = localStorage.getItem('maxValueForClick');
    if (numAsString) {
        dispatch(setNumAC(JSON.parse(numAsString)))
    }
    if (maxNumAsString) {
        dispatch(setMaxNumAC(JSON.parse(maxNumAsString)))
    }
    if (startValueAsString) {
        dispatch(setStartValueAC(JSON.parse(startValueAsString)))
    }
    if (maxValueAsString) {
        dispatch(setMaxValueAC(JSON.parse(maxValueAsString)))
    }
    if (startValueForClickAsString) {
        dispatch(setStartValueForClickAC(JSON.parse(startValueForClickAsString)))
    }
    if (maxValueForClickAsString) {
        dispatch(setMaxValueForClickAC(JSON.parse(maxValueForClickAsString)))
    }


}
*/
