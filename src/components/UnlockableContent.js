import React, { useState } from 'react'
import styled from 'styled-components'
import github from './../images/github.png'
import resume from './../images/resume.png'
import phone from './../images/phone.png'
import lock from './../images/lock.png'
import unlock from './../images/unlock.png'

function UnlockableContent() {
    //eslint-disable-next-line
    const [unlockableItems, setUnlockableItems] = useState([
        {
            id: 1,
            image: github,
            alt: 'coin stack',
            info: 'View repo',
            unlocked: false,
            cost: 5,
        },
        {
            id: 2,
            image: resume,
            alt: 'coin stack',
            info: 'View resume',
            unlocked: false,
            cost: 10,
        },
        {
            id: 3,
            image: phone,
            alt: 'coin stack',
            info: 'Call me',
            unlocked: false,
            cost: 50,
        },
    ])
    return (
        <Container>
            <UnlockableContentContainer>
                <StyledLegend>Unlockable content</StyledLegend>
                {unlockableItems.map((item, index) => {
                    return (
                        <UnlockableContentItem key={index}>
                            <LockContainer>
                                <LockIcon
                                    src={item.unlocked ? unlock : lock}
                                    alt={item.unlocked ? 'unlocked' : 'locked'}
                                />
                            </LockContainer>
                            <Top>
                                <StyledIcon src={item.image} alt={item.alt} />
                            </Top>
                            <Bottom>{item.info}</Bottom>
                            <Bottom>
                                <CostSpan>({item.cost} coins)</CostSpan>
                            </Bottom>
                        </UnlockableContentItem>
                    )
                })}
            </UnlockableContentContainer>
        </Container>
    )
}

const LockContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    top: 0;
    left: 0;
`

const LockIcon = styled.img`
    width: 35x;
    height: 35px;
    margin-top: -5px;
`

const CostSpan = styled.span`
    font-size: 0.7rem;
    color: #bb86fc;
`

const StyledIcon = styled.img`
    width: 35%;
    padding-bottom: 3px;
`

const Top = styled.div`
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Bottom = styled.div`
    height: 20%;
    display: flex;
`

const UnlockableContentItem = styled.div`
    border: 1px solid #000;
    border-radius: 3px;
    width: 33.3%;
    height: auto;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.7rem;
    padding: 8px;
    padding-bottom: 8px;
    @media (min-width: 501px) {
        &:hover {
            border: 1px solid #fff;
        }
    }
    &:hover {
        cursor: pointer;
    }
`

const StyledLegend = styled.legend`
    padding: 0 10px;
    font-size: 1rem;
`

const UnlockableContentContainer = styled.fieldset`
    box-sizing: border-box;
    border: 3px solid #bb86fc;
    border-radius: 3px;
    color: #fff;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: black;
    width: 50%;
    height: 200px;
    margin: 20px 60px;
    @media (max-width: 768px) {
        width: 80%;
    }
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
    flex-wrap: no-wrap;
    justify-content: center;
    align-items: center;
    font-family: Helvetica;
`

export default UnlockableContent
