import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { addCoins } from '../features/coins/coinsSlice'
import { showEarnedCoinsInfo } from '../features/popups/popupsSlice'
import hamburger_menu_icon from './../images/hamburger_menu_icon.png'

function NavBar() {
    const dispatch = useDispatch()
    const [showHamburgerMenu, setShowHamburgerMenu] = useState(false)
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
    const handleShowHamburgerMenu = (earned, id) => {
        if (!showHamburgerMenu) {
            setShowHamburgerMenu(true)
            document.body.style.position = 'fixed'
            document.body.style.top = `-${window.scrollY}px`
        } else {
            setShowHamburgerMenu(false)
            if (!earned) handleEarnedCoins(id)
            const scrollY = document.body.style.top
            document.body.style.position = ''
            document.body.style.top = ''
            window.scrollTo(0, parseInt(scrollY || '0') * -1)
        }
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
            <MobileNav>
                <HoverStylingMobile
                    onClick={() => handleShowHamburgerMenu(true, null)}
                >
                    <StyledHamburgerIcon
                        src={hamburger_menu_icon}
                        alt="hamburger menu icon"
                    />
                </HoverStylingMobile>
                {showHamburgerMenu && (
                    <HamburgerMenuModal>
                        <HamburgerOptions>
                            {links.map((link) => {
                                return (
                                    <HamburgerOption
                                        key={link.id}
                                        href={link.url}
                                        target="_blank"
                                        onClick={() =>
                                            handleShowHamburgerMenu(
                                                link.earned,
                                                link.id
                                            )
                                        }
                                    >
                                        {link.display}
                                    </HamburgerOption>
                                )
                            })}
                            <HamburgerOption
                                onClick={() =>
                                    handleShowHamburgerMenu(true, null)
                                }
                            >
                                Close
                            </HamburgerOption>
                        </HamburgerOptions>
                    </HamburgerMenuModal>
                )}
            </MobileNav>
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
    @media (max-width: 768px) {
        padding: 20px 0;
    }
`

// Mobile Navigation
const MobileNav = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: flex;
        padding-right: 20px;
        font-size: 1rem;
    }
    @media (max-width: 500px) {
        font-size: 0.8rem;
    }
`
const StyledHamburgerIcon = styled.img`
    width: 21px;
    height: 21px;
    @media (max-width: 500px) {
        width: 16px;
        height: 16px;
    }
`

const HoverStylingMobile = styled.div`
    margin-left: 1px;
    border-radius: 5px;
    padding: 10px 10px;
    &:hover {
        cursor: pointer;
        background-color: #171717;
    }
`

const HamburgerOption = styled.a`
    display: flex;
    align-items: center;
    border-radius: 5px;
    height: 50px;
    padding: 0 10px;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 400;
    color: #fff;
    text-decoration: none;
    &:hover {
        cursor: pointer;
        color: #bb86fc;
        background-color: #171717;
    }
`

const HamburgerMenuModal = styled.div`
    position: fixed; /* Stay in place */
    z-index: 2; /* Sit on top */
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.9); /* Black w/ opacity */
    overflow: auto;
    overflow-x: hidden;
`

const HamburgerOptions = styled.div`
    border: 1.5px solid #262626;
    border-radius: 10px;
    background-color: black;
    position: absolute;
    right: 25px;
    width: 550px;
    padding: 5px;
    top: 7%;
    width: 25%;
    @media (max-width: 400px) {
        top: 7%;
        width: 40%;
    }
    @media (max-width: 300px) {
        top: 7%;
        width: 45%;
    }
`

export default NavBar
