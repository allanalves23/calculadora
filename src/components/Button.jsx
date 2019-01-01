import React from 'react'
import './Button.css'

export default props => 
    <button onClick={() => props.click && props.click(props.label)}className={`
        button
        ${props.op ? 'op': ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}

    `}>{props.label}</button>
