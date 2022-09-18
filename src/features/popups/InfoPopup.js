import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { showGameInfo } from './popupsSlice'
import browse_icon from './../../images/browse_icon.png'
import coin_stack from './../../images/coin_stack_alt.png'
import unlock_icon from './../../images/unlock_icon.png'

function InfoPopup() {
    const dispatch = useDispatch()
    return (
        <EarnedCoinsModal>
            <EarnedCoinsContainer>
                <Top>
                    <Header>What are coins for?</Header>
                </Top>
                <Middle>
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
                </Middle>
                <Bottom>
                    <Button onClick={() => dispatch(showGameInfo())}>
                        awesome!
                    </Button>
                </Bottom>
            </EarnedCoinsContainer>
        </EarnedCoinsModal>
    )
}

const StyledIcon = styled.img`
    padding: 10px 0;
    width: 20%;
`

const Button = styled.div`
    border: 2px solid #fff;
    border-radius: 3px;
    display: flex;
    margin-top: 20px;
    padding: 3px 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 0.8rem;
    letter-spacing: 1px;
    color: #000;
    background-color: #fff;
    &:hover {
        cursor: pointer;
        color: #bb86fc;
        border: 2px solid #bb86fc;
    }
`

const Paragraph = styled.p`
    margin: 0;
`

const Header = styled.p`
    font-size: 1.6rem;
    margin: 0;
`

const Top = styled.div`
    display: flex;
    justify-content: center;
`

const Middle = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 25px;
    font-size: 0.8rem;
`

const Bottom = styled.div`
    display: flex;
    justify-content: center;
`

const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33.3%;
`

const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33.3%;
`

const Right = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33.3%;
`

const EarnedCoinsContainer = styled.div`
    font-family: Helvetica;
    border: 3px solid #fff;
    border-radius: 8px;
    color: #fff;
    display: flex;
    flex-direction: column;
    background-color: black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 550px;
    padding: 25px 10px;
    @media (max-width: 768px) {
        width: 75%;
    }
`

const EarnedCoinsModal = styled.div`
    position: fixed;
    z-index: 2;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.9);
    overflow: auto;
    overflow-x: hidden;
`

export default InfoPopup
