import {RootReducerType} from '../BLL/store';
import {StateType} from '../BLL/Reducer';





export const loadState = ()=>{
    let preloadedState = {
        counter: {
            num: 0,
            maxNum: 0,
            startValue: 0,
            maxValue: 0,
            startValueForClick: 0,
            maxValueForClick: null,
            error: false
        }
    };
    let numAsString = localStorage.getItem('num');
    let maxNumAsString = localStorage.getItem('maxNum');
    let startValueForClickAsString = localStorage.getItem('startValueForClick');
    let maxValueForClickAsString = localStorage.getItem('maxValueForClick');
    if (numAsString) {
        preloadedState.counter.num =  JSON.parse(numAsString)
    }
    if (maxNumAsString) {
        preloadedState.counter.maxNum = JSON.parse(maxNumAsString)
    }
    if (startValueForClickAsString) {
        preloadedState.counter.startValueForClick = JSON.parse(startValueForClickAsString)
        preloadedState.counter.startValue = preloadedState.counter.startValueForClick
    }
    if (maxValueForClickAsString) {
        preloadedState.counter.maxValueForClick = JSON.parse(maxValueForClickAsString)
        if(preloadedState.counter.maxValueForClick){
            preloadedState.counter.maxValue =  preloadedState.counter.maxValueForClick
        }
    }
    return preloadedState
}


export const saveState = (state:RootReducerType)=>{
    localStorage.setItem('num', JSON.stringify(state.counter.num))
    localStorage.setItem('maxNum', JSON.stringify(state.counter.maxNum))
    localStorage.setItem('startValue', JSON.stringify(state.counter.startValue))
    localStorage.setItem('maxValue', JSON.stringify(state.counter.maxValue))
    localStorage.setItem('startValueForClick', JSON.stringify(state.counter.startValueForClick))
    localStorage.setItem('maxValueForClick', JSON.stringify(state.counter.maxValueForClick))
}