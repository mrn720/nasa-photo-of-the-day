import React from 'react'
import {HeaderDiv} from './Styling.js'

function Header (props) {
    const {date, title} = props.props

    return (
        <HeaderDiv>
            <h1>{title}</h1>
            <h2>{date}</h2>
        </HeaderDiv>
    )
}

export default Header