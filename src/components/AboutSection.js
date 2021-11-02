import React from 'react'
import styled from 'styled-components'

import { SectionTitle } from './SectionTitle'
import { employeeData } from '../data/EmployeeData'
import { HorizontalDivider } from './HorizontalDivider'
import FadeIn from 'react-fade-in'

const AboutSection = () => {
    return (
        <AboutContainer>
            <SectionTitle>ABOUT US</SectionTitle>
            <HorizontalDivider />
            <AboutContent>
                <FadeIn>
                    {employeeData.map((employee, index) => (
                        <EmployeeCard key={index}>
                            <EmployeeImg src={employee.image} />
                            <EmployeeDetails>
                                <EmployeeH1>{employee.name}</EmployeeH1>
                                <EmployeeH2>{employee.job}, {employee.age}</EmployeeH2>
                                <EmployeeP>{employee.description}</EmployeeP>
                            </EmployeeDetails>
                        </EmployeeCard>
                        ))
                    }
                </FadeIn>
            </AboutContent>
        </AboutContainer>
    )
}

export default AboutSection

const AboutContainer = styled.div`
    background-color: #131d2e;
    color: #FFF7EE;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const AboutContent = styled.div`
    margin-bottom: 100px;
`

const EmployeeCard = styled.div`
    margin: 30px 25vw 0 25vw;
    padding-bottom: 20px;
    display: flex;
    border-bottom: 1px solid #fff;

    @media screen and (max-width: 768px) {
        margin-bottom: 30px;
        align-items: center;
        flex-direction: column;
    }
`

const EmployeeImg = styled.img`
    border: 2px solid #FFF7EE;
    width: 200px;
    height: 200px;
    border-radius: 100%;
    box-shadow: -5px 10px 20px -5px #000;
    object-fit: cover;
    animation: fadein 3s;

    @media screen and (max-width: 768px) {
        width: 40vw;
        height: 40vw;
        margin-top: 30px;
    }

    @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }
`

const EmployeeDetails = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 20px;
    flex-direction: column;
`

const EmployeeH1 = styled.h1`
    font-size: 2rem;
    font-weight: normal;
    margin-bottom: 4px;
`
const EmployeeH2 = styled.h2`
    font-size: 1rem;
    font-weight: lighter;
    font-style: italic;
    margin-bottom: 15px;
`

const EmployeeP = styled.p`
    font-size: 1rem;
    font-weight: 50;
`


