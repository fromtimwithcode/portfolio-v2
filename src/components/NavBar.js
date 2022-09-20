import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { addCoins } from '../features/coins/coinsSlice'
import { showEarnedCoinsInfo } from '../features/popups/popupsSlice'

function NavBar() {
    const dispatch = useDispatch()
    const [links, setLinks] = useState([
        {
            id: 0,
            display: 'github',
            url: 'https://github.com/fromtimwithcode',
            earned: false,
        },
        {
            id: 1,
            display: 'twitter',
            url: 'https://twitter.com/timbo_btc',
            earned: false,
        },
        {
            id: 2,
            display: 'linkedin',
            url: 'https://linkedin.com/in/fromtimwithcode',
            earned: false,
        },
    ])
    const handleEarnedCoins = (id) => {
        dispatch(addCoins(3))
        dispatch(showEarnedCoinsInfo())
        setLinks((prevState) => {
            let stateCopy = [...prevState]
            const index = stateCopy.findIndex((obj) => obj.id === id)
            stateCopy[index] = { ...stateCopy[index], earned: true }
            return stateCopy
        })
    }
    return (
        <Container>
            <Left onClick={() => window.location.reload()}>TIM MARCHANT</Left>
            <Right>
                {links.map((link) => {
                    return (
                        <StyledLink
                            key={link.id}
                            href={link.url}
                            target="_blank"
                            onClick={
                                link.earned
                                    ? null
                                    : () => handleEarnedCoins(link.id)
                            }
                        >
                            {link.display}
                        </StyledLink>
                    )
                })}
            </Right>
        </Container>
    )
}

const StyledLink = styled.a`
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 600;
    color: #fff;
    text-decoration: none;
    padding-left: 20px;
    &:hover {
        cursor: pointer;
        color: #bb86fc;
    }
`

const Left = styled.div`
    font-size: 1.2rem;
    letter-spacing: 5px;
    padding-left: 30px;
    @media (max-width: 500px) {
        padding-left: 0;
        font-size: 0.8rem;
    }
    &:hover {
        cursor: pointer;
    }
`

const Right = styled.div`
    display: flex;
    padding-right: 30px;
    @media (max-width: 768px) {
        display: none;
    }
    @media (max-width: 500px) {
        padding-right: 0;
    }
`

const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-family: Helvetica;
    color: #fff;
    padding: 40px 0;
    @media (max-width: 500px) {
        flex-direction: column;
        padding: 0;
        padding-top: 30px;
    }
`

export default NavBar
