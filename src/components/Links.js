import React from 'react'
import styled from 'styled-components'

function Links() {
    return (
        <Container>
            {/* <StyledLink href="https://fromtimwithcode.com" target="_blank">
                <Button>FROMTIMWITHCODE.COM</Button>
            </StyledLink> */}
            <StyledLink href="https://bloxfit.com" target="_blank">
                <Button>BLOXFIT</Button>
            </StyledLink>
            <StyledLink href="https://projectindigonft.com" target="_blank">
                <Button>PROJECT INDIGO</Button>
            </StyledLink>
            <StyledLink href="https://templetrippers.io" target="_blank">
                <Button>TEMPLE TRIPPERS</Button>
            </StyledLink>
            <StyledLink href="https://devshop.ai" target="_blank">
                <Button>DEVSHOP.AI</Button>
            </StyledLink>
            <StyledLink
                href="https://www.buymeacoffee.com/fromtimwithcode"
                target="_blank"
            >
                <Button>BUY ME A COFFEE</Button>
            </StyledLink>
        </Container>
    )
}

const StyledLink = styled.a`
    text-decoration: none;
`

const Button = styled.div`
    border: 1px solid #1e1e1e;
    border-radius: 3px;
    display: flex;
    width: 350px;
    padding: 1rem 0.5rem;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    font-size: 0.8rem;
    background-color: #000;
    &:hover {
        cursor: pointer;
        background-color: #1b1b1b;
        border: 1px solid #bb86fc;
        color: #bb86fc;
    }
`

const Container = styled.div`
    box-sizing: border-box;
    font-family: Helvetica;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #000;
    height: 100vh;
    max-height: -webkit-fill-available;
`

export default Links
