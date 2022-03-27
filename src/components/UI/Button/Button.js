import React from 'react'
import classes from './Button.module.css'

const Button = props => {
    const cls1 = [
        classes.Button,
        classes[props.type]
    ]

    return (
        <button
            onClick={props.onClick}
            className={cls1.join(' ')}
            disabled={props.disabled}
        >
            { props.children }
        </button>
    )
}

export default Button