import React from 'react'
import {InfoDiv} from './Styling.js'

function Information (props) {
    const { explanation } = props.props
    return (
        <InfoDiv>
            <h3>"What's going on here?"</h3>
            <p> {explanation} </p>
        </InfoDiv>
    )
}

export default Information
