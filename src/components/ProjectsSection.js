import React from 'react'
import styled from 'styled-components'

import { SectionTitle } from './SectionTitle'
import { HorizontalDivider } from './HorizontalDivider'
import FadeIn from 'react-fade-in'
import ProjectsImages from './ProjectsImages'

const ProjectsSection = () => {
    return (
        <ProjectsContainer>
            <SectionTitle>PROJECTS</SectionTitle>
            <HorizontalDivider />
            <ProjectsContent>
                <FadeIn>
                    <ProjectsImages />
                    <ProjectsTxt>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus.
                    </ProjectsTxt>
                </FadeIn>
            </ProjectsContent>
        </ProjectsContainer>
    )
}

export default ProjectsSection

const ProjectsContainer = styled.div`
    color: #FFF7EE;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const ProjectsContent = styled.div`
    margin-top: 20px;
    padding: 0 15vw 0 15vw;
    
    @media screen and (max-width: 768px) {
        padding: 0 0 0 0;
        
    }
`

const ProjectsTxt = styled.p`
    margin: 30px auto 100px auto;
    font-size: 1rem;
    text-align: center;
    width: 75%;

    @media screen and (max-width: 768px) {
        width: 80%;

    }
`


