import React, { useState } from 'react'
import styled from 'styled-components'

import { SectionTitle } from './SectionTitle'
import { HorizontalDivider } from './HorizontalDivider'
import FadeIn from 'react-fade-in'
import Video from '../assets/videos/email_data.mp4'
import { Button } from './Button'

const ContactSection = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        console.log(email, name, message);
        // clearing the values
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <ContactContainer>
            <SectionTitle>CONTACT US</SectionTitle>
            <HorizontalDivider />
            <ContactContent>
                <EmailP>Send us a message</EmailP>
                <EmailForm id="emailForm">
                    <EmailInputs>
                        <EmailInput name="name" first="true" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                        <EmailInput name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </EmailInputs>
                    <div>
                        <EmailTextarea name="message" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
                    </div>
                    <div>
                        <SubmitButton onClick={handleSubmit}>
                            Submit
                        </SubmitButton>
                    </div>
                </EmailForm>
                <OrLine />
                <EmailP>Or email us at</EmailP>
                <EmailLink>epicinc@epicinc.com</EmailLink>
            </ContactContent>
        </ContactContainer>
    )
}

export default ContactSection

const ContactContainer = styled.div`
    color: #FFF7EE;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const ContactContent = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const EmailForm = styled.div`
    width: 65%;
    max-width: 600px;
    font-size: 0.8rem;

    @media screen and (max-width: 768px) {
        width: 80%;
    }
`

const EmailInputs = styled.div`
    display: flex;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

const EmailInput = styled.input`
    flex: 1;
    margin-left: ${({first}) => (first ? '' : '10px')};
    color: #FFF7EE;
    background: #273C5C;
    border: none;
    height: 40px;
    padding: 5px;
    /* box-shadow: 0px 0px 5px 0px #000; */

    @media screen and (max-width: 768px) {
        margin: 5px 0 5px 0;
        min-height: 40px;
    }
`

const EmailTextarea = styled.textarea`
    width: 100%;
    height: 250px;
    margin-top: 10px;
    color: #FFF7EE;
    background: #273C5C;
    border: none;
    resize: vertical;
    padding: 5px;
    /* box-shadow: 0px 0px 5px 0px #000; */

    @media screen and (max-width: 768px) {
        margin: 5px 0 5px 0;
        height: 180px;
    }
`

const SubmitButton = styled.button`
    float: right;
    margin-top: 5px;
    background: #273C5C;
    white-space: nowrap;
    padding: 10px 32px;
    color: #fff;
    font-size: '16px';
    outline: none;
    border: none;
    min-width: 100px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s !important;
    border-radius: none;
    /* box-shadow: 0px 0px 5px 0px #000; */

    &:hover {
        background: ${({primary}) => (primary ? '#077BF1' : '#3C5B8C')};
        transform: translateX(2px);
    }
`

const OrLine = styled.div`
    width: 100%;
    margin: 110px 0 30px 0;
    border-top: 1px solid #FFF7EE;
`

const EmailP = styled.p`
    margin-bottom: 10px;
    font-weight: 200;
`

const EmailLink = styled.h2`
    margin-bottom: 100px;
    font-style: italic;
`
