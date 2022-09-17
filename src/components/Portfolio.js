import React from 'react'
import styled from 'styled-components'
import project_indigo from './../images/project_indigo.png'
import bloxfit from './../images/bloxfit.jpg'
import temple_trippers from './../images/temple_trippers.png'
import train_to_level_up from './../images/train_to_level_up.png'
import { useDispatch } from 'react-redux'
import { addCoins } from '../features/coins/coinsSlice'

function Portfolio() {
    const dispatch = useDispatch()
    const projects = [
        {
            id: 1,
            url: 'https://projectindigonft.com',
            image: project_indigo,
            info: 'An NFT experience with game modes',
        },
        {
            id: 2,
            url: 'http://bloxfit.com',
            image: bloxfit,
            info: 'A social platform with fitness classes',
        },
        {
            id: 3,
            url: 'http://templetrippers.io',
            image: temple_trippers,
            info: 'A customizable NFT experience',
        },
        {
            id: 4,
            url: 'http://traintolevelup.com',
            image: train_to_level_up,
            info: 'A fitness web app with learning management',
        },
    ]
    return (
        <Container>
            {projects.map((project) => {
                return (
                    <Card
                        key={project.id}
                        href={project.url}
                        target="_blank"
                        onClick={() => dispatch(addCoins(5))}
                    >
                        <First
                            style={{
                                backgroundImage: `url(${project.image})`,
                            }}
                        ></First>
                        <Second>{project.info}</Second>
                    </Card>
                )
            })}
        </Container>
    )
}

const First = styled.div`
    opacity: 0.4;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
`

const Second = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Helvetica;
    font-size: 2rem;
    text-align: center;
`

const Card = styled.a`
    box-sizing: border-box;
    position: relative;
    width: 500px;
    height: 200px;
    margin: 20px 60px;
    background: #000;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 3px solid #fff;
    border-radius: 3px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    @media (max-width: 1450px) {
        width: 400px;
    }
    @media (max-width: 1060px) {
        margin: 20px 30px;
    }
    @media (max-width: 500px) {
        margin: 5px 20px;
        width: 370px;
        height: 150px;
    }
    &:hover {
        cursor: pointer;
        border: 3px solid #bb86fc;
    }
`

const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    max-width: 1400px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`

export default Portfolio
