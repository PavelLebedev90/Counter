import {Button} from '../Counter/Buttons/Button/Button';
import React, {ChangeEvent, Dispatch} from 'react';
import {Input} from './Input';
import {ActionType} from '../../BLL/Reducer';
import {useDispatch} from 'react-redux';




type ParamsType = {
    maxValue: number
    setMaxValue: (value: number) => ActionType
    error: boolean
    setError: (value:boolean) => ActionType
    startValue: number
    setStartValue: (startValue: number) => ActionType
    setParams: () => void
}

export function Params(props: ParamsType) {
    const dispatch = useDispatch()
    const onChangeMax = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch(props.setMaxValue(+e.currentTarget.value))
        dispatch(props.setError(false))
    }
    const onChangeStart = (e:ChangeEvent<HTMLInputElement>) => {
       dispatch(props.setStartValue(+e.currentTarget.value))
        dispatch(props.setError(false))
    }
    return (
        <div className="App">
            <div className={'params'}>
                <Input label={'maxValue'}
                       error={props.error}
                       type={'number'}
                       value={props.maxValue}
                       onChange={onChangeMax}
                />

                <Input label={'startValue'}
                       error={props.error}
                       value={props.startValue}
                       type={'number'}
                       onChange={onChangeStart}
                />
            </div>
            <div className={'buttonSet'}>
                <Button className={props.error? "buttonDis":'button'} disabled={props.error} onClick={props.setParams}>set</Button>
            </div>
        </div>
    )
}