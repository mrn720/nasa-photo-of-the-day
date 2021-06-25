import React from 'react'
import styled from 'styled-components'

function Header (props) {
    const {date, title} = props.props

    return (
        <HeaderDiv>
            <h1>{title}</h1>
            <h2>{date}</h2>
        </HeaderDiv>
    )
}

const HeaderDiv = styled.div`
    display: flex;
    color: orange;
    background-color: black;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export default Header 