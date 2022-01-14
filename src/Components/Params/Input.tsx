import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';

type InputPropsType =InputDefaultType & {
    label: string
    num?: number
    setNum?: (num: number) => void
    maxValue?: number
    setMaxValue?: (value: number) => void
    error: boolean
}
type InputDefaultType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export function Input(props: InputPropsType) {

    return (
        <div className="valueInput">
            <label className={props.error? "labelRed": ""}>
                {props.label}
                <input className={props.error? "errorInput": ""}
                    {...props}
                />
            </label>
        </div>
    )
}