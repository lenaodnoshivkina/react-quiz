import React from 'react';
import classes from './MenuToggle.module.css'

const MenuToggle = props => {
    const testcls = [
        classes.MenuToggle,
        'fa'
    ]

    if (props.isOpen) {
        testcls.push('fa-times')
        testcls.push(classes.open)
    } else {
        testcls.push('fa-bars')
    }

    return (
        <i
            className={testcls.join(' ')}
            onClick={props.onToggle}
        />

    )
}

export default MenuToggle