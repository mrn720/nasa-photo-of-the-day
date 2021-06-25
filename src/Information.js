import React from 'react'
import styled from 'styled-components'

function Information (props) {
    const { explanation } = props.props
    return (
        <InfoDiv>
            <h3>"What's going on here?"</h3>
            <p> {explanation} </p>
        </InfoDiv>
    )
}

const InfoDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export default Information