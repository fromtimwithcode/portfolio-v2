import React, { useState } from 'react'
import styled from 'styled-components'
import project_indigo from './../images/project_indigo.png'
import bloxfit from './../images/bloxfit.jpg'
import temple_trippers from './../images/temple_trippers.png'
import train_to_level_up from './../images/train_to_level_up.png'
import storytime from './../images/storytime.jpg'
import affirmations from './../images/affirmations.jpg'
import { useDispatch } from 'react-redux'
import { addCoins } from '../features/coins/coinsSlice'
import { showEarnedCoinsInfo } from '../features/popups/popupsSlice'
import coin from './../images/coin.png'

function Portfolio() {
    const dispatch = useDispatch()
    const [projects, setProjects] = useState([
        {
            id: 0,
            url: 'https://storytime.fromtimwithcode.com',
            image: storytime,
            info: `An AI-powered children's story generator`,
            earned: false,
        },
        {
            id: 1,
            url: 'https://affirmations.fromtimwithcode.com',
            image: affirmations,
            info: `An AI-powered affirmation oracle`,
            earned: false,
        },
        {
            id: 2,
            url: 'https://projectindigonft.com',
            image: project_indigo,
            info: 'An NFT experience with two game modes',
            earned: false,
        },
        {
            id: 3,
            url: 'http://templetrippers.io',
            image: temple_trippers,
            info: 'A customizable NFT experience',
            earned: false,
        },
        {
            id: 4,
            url: 'http://bloxfit.com',
            image: bloxfit,
            info: 'A fitness on demand platform with rewards',
            earned: false,
        },
        {
            id: 5,
            url: 'http://traintolevelup.com',
            image: train_to_level_up,
            info: 'A fitness web app with learning management',
            earned: false,
        },
    ])
    const handleEarnedCoins = (id) => {
        dispatch(addCoins(5))
        dispatch(showEarnedCoinsInfo())
        setProjects((prevState) => {
            let stateCopy = [...prevState]
            const index = stateCopy.findIndex((obj) => obj.id === id)
            stateCopy[index] = { ...stateCopy[index], earned: true }
            return stateCopy
        })
    }
    return (
        <Container>
            {projects.map((project, index) => {
                return (
                    <Card
                        key={index}
                        href={project.url}
                        target="_blank"
                        onClick={
                            project.earned
                                ? null
                                : () => handleEarnedCoins(project.id)
                        }
                    >
                        <First
                            style={{
                                backgroundImage: `url(${project.image})`,
                            }}
                        ></First>
                        <Second>
                            <StyledTitle>{project.info}</StyledTitle>
                        </Second>
                        <EarnInfo>
                            {project.earned ? (
                                <EarnInfoText>
                                    🥳 Already earned 5 coins
                                </EarnInfoText>
                            ) : (
                                <>
                                    <StyledCoin src={coin} alt="coin" />
                                    <EarnInfoText>
                                        Earn 5 coins by visiting
                                    </EarnInfoText>
                                </>
                            )}
                        </EarnInfo>
                    </Card>
                )
            })}
        </Container>
    )
}

const StyledTitle = styled.p`
    padding: 0 20px;
`

const EarnInfoText = styled.p`
    font-family: 'Bebas Neue', cursive;
    margin: 0;
    font-size: 16px;
    margin-top: 1px;
`

const StyledCoin = styled.img`
    width: 20px;
    margin-right: 3px;
    margin-bottom: 0.6px;
`

const EarnInfo = styled.div`
position absolute;
bottom: 0;
right: 3px;
display: flex;
justify-content: flex-end;
align-items: center;
`

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
    font-size: 2rem;
    text-align: center;
    @media (max-width: 500px) {
        font-size: 1.6rem;
    }
`

const Card = styled.a`
    box-sizing: border-box;
    position: relative;
    width: 65%;
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
    &:hover {
        cursor: pointer;
        border: 3px solid #bb86fc;
    }
    @media (max-width: 500px) {
        width: 100%;
        margin: 5px 20px;
        margin-bottom: 20px;
        width: 100%;
        height: 150px;
        &:hover {
            border: 3px solid #fff;
        }
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
    font-family: Helvetica;
`

export default Portfolio
