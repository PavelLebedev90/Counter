import {Button} from '../Counter/Buttons/Button/Button';
import React, {ChangeEvent, Dispatch} from 'react';
import {Input} from './Input';
import {
    ActionType,
    setErrorAC, setMaxNumAC,
    setMaxValueAC, setMaxValueForClickAC, setNumAC,
    setStartValueAC,
    setStartValueForClickAC,
    StateType
} from '../../BLL/Reducer';
import {useDispatch, useSelector} from 'react-redux';
import {RootReducerType} from '../../BLL/store';





export function ParamsWithRedux() {
    const dispatch = useDispatch()
    const state = useSelector<RootReducerType, StateType>(state => state.counter)
    const onChangeMax = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValueAC(+e.currentTarget.value))
        dispatch(setErrorAC(false))
    }
    const onChangeStart = (e:ChangeEvent<HTMLInputElement>) => {
       dispatch(setStartValueAC(+e.currentTarget.value))
        dispatch(setErrorAC(false))
    }
    const setParams = () => {
        dispatch(setStartValueForClickAC(state.startValue))
        dispatch(setMaxValueForClickAC(state.maxValue))
        dispatch(setNumAC(state.startValue))
        dispatch(setMaxNumAC(state.maxValue))
    }

    return (
        <div className="App">
            <div className={'params'}>
                <Input label={'maxValue'}
                       error={state.error}
                       type={'number'}
                       value={state.maxValue}
                       onChange={onChangeMax}
                />
                <Input label={'startValue'}
                       error={state.error}
                       value={state.startValue}
                       type={'number'}
                       onChange={onChangeStart}
                />
            </div>
            <div className={'buttonSet'}>
                <Button className={state.error? "buttonDis":'button'} disabled={state.error} onClick={setParams}>set</Button>
            </div>
        </div>
    )
}