// Core stuff
import React, { useState } from 'react'
import styled from 'styled-components'

// Base styles/components
import baseStyles from '../styles/baseStyles'
import baseComponents from '../components/baseComponents'

// Components
import Helmet from '../components/helmet'
import NavWrapper from '../components/navWrapper'
import Input from '../components/input'
import TextArea from '../components/textArea'
import { Toast, triggerToast } from '../components/toast'

// Utils
import { createRouteString } from '../utils/stringUtils'

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
      <Input labelText="Your Name" onChange={props.setName}/>
      <Input labelText="Your Email Address" onChange={props.setEmailAddress}/>
      <TextArea labelText="Message Content" onChange={props.setMessageContent}/>
      <EmailSendButton onClick={props.onSubmit}>
        Send Email
      </EmailSendButton>
    </ContactFormContainer>
  )
}

export default function Contact(props) {
  const [name, setName] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [messageContent, setMessageContent] = useState('')

  async function sendEmail() {
    try {
      const response = await fetch(".netlify/functions/emailService/emailService.js", {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          emailAddress,
          messageContent
        })
      })
      triggerToast("Thanks for your email!")
      await response.body
    } catch(err) {
      console.log(err)
    }
  }

  const {
    PageContainerDiv
  } = baseComponents

  const {
    location
  } = props

  return (
    <PageContainerDiv>
      <Helmet route={createRouteString(location.pathname)} />
      <NavWrapper />
      <ContactForm
        setName={(event) => setName(event.target.value)}
        setEmailAddress={(event) => setEmailAddress(event.target.value)}
        setMessageContent={(event) => setMessageContent(event.target.value)}
        onSubmit={() => sendEmail()}
      />
      <Toast />
    </PageContainerDiv>
  )
}