import React, { useState } from 'react'
import {HeroContainer, HeroBg, VideoBg, HeroH1, HeroContent, HeroP,
     HeroBtnWrapper, ArrowForward, ArrowRight, Container} from './HeroElements'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElement'
import Coronatest from '../../pages/coronatest'
import { Link } from 'react-router-dom'


const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>What concerns you about your health today?</HeroH1>
                <HeroP>
                Check your symptoms and find out what could be causing them. 
                It's fast, free and anonymous.
                </HeroP>
                <HeroBtnWrapper>
                    <Container to="/coronacheck">
                        {/* to is to be changed */}
                    <Button to="/coronacheck" onMouseEnter={onHover} onMouseLeave={onHover}
                            primary='true' dark='true'>
                            Covid Checkup{hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                    <Button to="/symtom" onMouseEnter={onHover} onMouseLeave={onHover}
                            primary='true' dark='true'>
                            Get Checkup{hover ? <ArrowForward /> : <ArrowRight />}              
                    </Button>
                    </Container>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
