import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type ButtonType = DefaultButtonPropsType & {
    disabled?: boolean
    onClick?: () => void
    className?: string
}

export function Button(props: ButtonType) {
    return (
        <button {...props}/>
    )
}