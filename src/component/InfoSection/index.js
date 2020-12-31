import React from 'react'
import { Button } from '../ButtonElement'
import {Link as LinkR} from 'react-router-dom'
import { Column2, ImgWrap, InfoContainer, InfoWrapper, InfoRow, Column1,
     TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img} from './InfoElements'


const InfoSection = ({lightBg, id, imgStart, lightText, headLine,
         darkText, description, buttonLable, image, alt, topLine, dark, dark2, primary, to }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                        <Button to ={to}
                                            smooth={true}
                                            duration={500}
                                            spy={true}
                                            exact='true'
                                            offset={-80}
                                            primary={primary ? 1 : 0}
                                            dark = {dark ? 1 : 0}
                                            dark2 = {dark2 ? 1 : 0}
                                            >{buttonLable}
                                        </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={image} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
