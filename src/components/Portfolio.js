import React from 'react'
import styled from 'styled-components'
import project_indigo from './../images/project_indigo.png'
import bloxfit from './../images/bloxfit.jpg'
import temple_trippers from './../images/temple_trippers.png'
import train_to_level_up from './../images/train_to_level_up.png'

function Portfolio() {
    return (
        <>
            <Container>
                <Card>
                    <First
                        style={{
                            backgroundImage: `url(${project_indigo})`,
                        }}
                    ></First>
                    <Second>An NFT experience with two game modes</Second>
                </Card>
                <Card>
                    <First
                        style={{
                            backgroundImage: `url(${bloxfit})`,
                        }}
                    ></First>
                    <Second>A social platform with fitness classes</Second>
                </Card>
            </Container>
            <Container>
                <Card>
                    <First
                        style={{
                            backgroundImage: `url(${temple_trippers})`,
                        }}
                    ></First>
                    <Second>A customizable NFT experience</Second>
                </Card>
                <Card>
                    <First
                        style={{
                            backgroundImage: `url(${train_to_level_up})`,
                        }}
                    ></First>
                    <Second>A fitness web app with learning management</Second>
                </Card>
            </Container>
        </>
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

const Card = styled.div`
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
