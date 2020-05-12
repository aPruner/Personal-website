// Core stuff
import React, { useState } from 'react'
import styled from 'styled-components'

// Base styles/components
import baseStyles from '../styles/baseStyles'
import baseComponents from '../components/baseComponents'

// Components
import NavWrapper from '../components/navWrapper'
import Input from '../components/input'

// TODO: Design and build Contact page, which will use the emailService serverless function
// TODO: Build contact form for sending me an email
const ContactFormContainer = styled(baseComponents.FlexContainerDiv)`
`

const ContactFormHeader = styled.h3`
  ${baseStyles.baseTextStyles}
`

const EmailSendButton = styled(baseComponents.Button)`
  font-size: 20px;
  ${baseStyles.baseTextStyles}
  background-color: transparent;
  padding: 10px;
  margin-top: 15px;
`

// TODO: Maybe refactor this form later out into a component
function ContactForm(props) {
  return (
    <ContactFormContainer>
      <ContactFormHeader>
        Send me an email using the following form:
      </ContactFormHeader>
      <Input labelText="Your Name" />
      <Input labelText="Your Email Address" />
      <Input labelText="Your Message" />
      <EmailSendButton onClick={() => {console.log("The button was clicked!")}}>
        Send Email
      </EmailSendButton>
    </ContactFormContainer>
  )
}

export default function Contact() {
  const [name, setName] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [messageContent, setMessageContent] = useState('')

  async function sendEmail(event) {
    try {
      const response = await fetch(".netlify/functions/emailService/emailService.js", {
        body: JSON.stringify({
          name,
          emailAddress,
          messageContent
        })
      })
      const body = await response.json()
      console.log(body)
    } catch(err) {
      console.log(err)
    }
  }

  const {
    PageContainerDiv
  } = baseComponents

  return (
    <PageContainerDiv>
      <NavWrapper />
      <ContactForm />
    </PageContainerDiv>
  )
}