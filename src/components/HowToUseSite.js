import React from 'react'
import styled from 'styled-components'
import browse_icon from './../images/browse_icon.png'
import coin_stack from './../images/coin_stack_alt.png'
import unlock_icon from './../images/unlock_icon.png'

function HowToUseSite() {
    return (
        <Container>
            <EarnedCoinsContainer>
                <StyledLegend>How to use this site</StyledLegend>
                <Left>
                    <Paragraph>1</Paragraph>
                    <StyledIcon src={browse_icon} alt="browse icon" />
                    <Paragraph>Browse site</Paragraph>
                </Left>
                <Center>
                    <Paragraph>2</Paragraph>
                    <StyledIcon src={coin_stack} alt="coin stack" />
                    <Paragraph>Earn coins</Paragraph>
                </Center>
                <Right>
                    <Paragraph>3</Paragraph>
                    <StyledIcon src={unlock_icon} alt="unlock icon" />
                    <Paragraph>Unlock content</Paragraph>
                </Right>
            </EarnedCoinsContainer>
        </Container>
    )
}

const StyledIcon = styled.img`
    padding: 10px 0;
    width: 20%;
`

const Paragraph = styled.p`
    margin: 0;
`

const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 33.3%;
`

const Center = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 33.3%;
`

const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 33.3%;
`

const StyledLegend = styled.legend`
    padding: 0 10px;
    font-size: 1rem;
`

const EarnedCoinsContainer = styled.fieldset`
    box-sizing: border-box;
    border: 3px solid #bb86fc;
    border-radius: 3px;
    color: #fff;
    display: flex;
    background-color: black;
    width: 65%;
    height: 200px;
    margin: 20px 60px;
    margin-top: 0;
    @media (max-width: 500px) {
        font-size: 0.8rem;
        margin: 5px 20px;
        margin-bottom: 20px;
        width: 100%;
        height: 150px;
    }
`

const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    max-width: 1400px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Helvetica;
`

export default HowToUseSite
