import styled from 'styled-components'


const HeaderDiv = styled.div`
    display: flex;
    color: orange;
    background-color: black;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const InfoDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const MainDiv = styled.div`
    background-color: black;
    min-height: 100vh;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 15%
`

export { HeaderDiv, InfoDiv, MainDiv };