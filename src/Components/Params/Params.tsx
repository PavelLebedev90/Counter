import {Button} from '../Counter/Buttons/Button/Button';
import React, {ChangeEvent, Dispatch} from 'react';
import {Input} from './Input';
import {ActionType} from '../../Reducer';




type ParamsType = {
    num: number
    setNum: (num: number) => void
    maxValue: number
    setMaxValue: (value: number) => ActionType
    error: boolean
    setError: (value:boolean) => ActionType
    startValue: number
    setStartValue: (startValue: number) => ActionType
    setParams: () => void
    dispatch: Dispatch<ActionType>
}

export function Params(props: ParamsType) {

    const onChangeMax = (e:ChangeEvent<HTMLInputElement>) => {
        props.dispatch(props.setMaxValue(+e.currentTarget.value))
        /*props.setError(false)*/
        props.dispatch(props.setError(false))
    }


    const onChangeStart = (e:ChangeEvent<HTMLInputElement>) => {
       props.dispatch(props.setStartValue(+e.currentTarget.value))
        /*props.setStartValue(+e.currentTarget.value)*/
        /*props.setError(false)*/
        props.dispatch(props.setError(false))
    }


    return (
        <div className="App">
            <div className={'params'}>
                <Input label={'maxValue'}
                       error={props.error}
                       type={'number'}
                       value={props.maxValue}
                       onChange={onChangeMax}
                      /* onFocus={onFocusHandler}*/
                />

                <Input label={'startValue'}
                       error={props.error}
                       value={props.startValue}
                       type={'number'}
                       onChange={onChangeStart}
                      /* onFocus={onFocusHandler}*/
                />
            </div>
            <div className={'buttonSet'}>
                <Button className={props.error? "buttonDis":'button'} disabled={props.error} onClick={props.setParams}>set</Button>
            </div>
        </div>
    )
}