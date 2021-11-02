import React from 'react'
import styled from 'styled-components'

import { SectionTitle } from './SectionTitle'
import { HorizontalDivider } from './HorizontalDivider'
import FadeIn from 'react-fade-in'
import Video from '../assets/videos/email_data.mp4'

const WhatWeDoSection = () => {
    return (
        <WWDContainer>
            <SectionTitle>WHAT WE DO</SectionTitle>
            <HorizontalDivider />
            <WWDContent>
                <FadeIn>
                    <WWDVideo src={Video} type="video/mp4" autoPlay loop muted playsInline disableRemotePlayback />
                    <WWDTxt>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus.
                    </WWDTxt>
                </FadeIn>
            </WWDContent>
        </WWDContainer>
    )
}

export default WhatWeDoSection

const WWDContainer = styled.div`
    color: #FFF7EE;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const WWDContent = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;
`

const WWDVideo = styled.video`
    width: 75vw;
    max-width: 850px;
    box-shadow: 0px 0px 20px -3px #000;
`

const WWDTxt = styled.p`
    max-width: 850px;
    margin-top: 15px;
    padding-left: 15px;
    border-left: 1px solid #FFF7EE;
`


