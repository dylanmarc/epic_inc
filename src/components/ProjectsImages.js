import React from 'react'
import styled from 'styled-components'

import { SectionTitle } from './SectionTitle'
import { HorizontalDivider } from './HorizontalDivider'
import FadeIn from 'react-fade-in'
import { projectImagesData } from '../data/ProjectImagesData'

const ProjectsImages = () => {
    return (
        <ProjectImagesContainer>
            {projectImagesData.map((item, index) => (
                <ProjectImg src={item.image} key={index} />
            ))}
        </ProjectImagesContainer>
    )
}

export default ProjectsImages

const ProjectImagesContainer = styled.div`
    color: #FFF7EE;
    text-align: center;
`

const ProjectImg = styled.img`
    margin: 0 5px 0 5px;
    width: 17vw;
    box-shadow: -5px 5px 15px 0px #000;
    transition: 0.2s;
    
    @media screen and (max-width: 768px) {
        width: 30vw;
    }

    &:hover{
        opacity: 0.75;
        transform: translateY(-2px);
        border: 1px solid #fff;
    }
`
