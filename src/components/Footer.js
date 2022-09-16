import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { addPoints } from './../features/points/pointsSlice'

function Footer() {
    const dispatch = useDispatch()
    return (
        <Container>
            from{' '}
            <Link
                href="https://github.com/fromtimwithcode"
                target="_blank"
                onClick={() => dispatch(addPoints(3))}
            >
                tim
            </Link>{' '}
            <Purple>♥</Purple> with{' '}
            <Link href="https://reactjs.org">react</Link>
        </Container>
    )
}

const Link = styled.a`
    color: #fff;
    text-decoration: none;
    padding-left: 5px;
    &:hover {
        cursor: pointer;
        color: #bb86fc;
    }
`

const Purple = styled.span`
    color: #bb86fc;
    padding: 0 5px;
`

const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    margin: 80px 0;
    padding: 25px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Helvetica;
    font-size: 0.8rem;
    letter-spacing: 1px;
    color: #fff;
    @media (max-width: 1450px) {
        margin-top: 40px;
    }
    @media (max-width: 500px) {
        margin-top: 15px;
    }
`

export default Footer
