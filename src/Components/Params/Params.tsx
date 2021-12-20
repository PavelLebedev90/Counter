import {Button} from '../Counter/Buttons/Button/Button';
import React, {ChangeEvent} from 'react';
import {Input} from './Input';


type ParamsType = {
    num: number
    setNum: (num: number) => void
    maxValue: number
    setMaxValue: (value: number) => void
    error: boolean
    setError: (error: boolean) => void
    startValue: number
    setStartValue: (startValue: number) => void
    setParams: () => void
}

export function Params(props: ParamsType) {

    const onChangeMax = (e:ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(+e.currentTarget.value)
        props.setError(false)
    }


    const onChangeStart = (e:ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(+e.currentTarget.value)
        props.setError(false)
    }
 /*   const onFocusHandler = () => {
        props.setNum(props.startValue)
    }*/

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