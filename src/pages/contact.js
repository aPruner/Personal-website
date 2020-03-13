import React, { useState } from 'react'
import styled from 'styled-components'
import NavWrapper from '../components/navWrapper'

// TODO: Design and build Contact page, which will use the emailService serverless function
// TODO: Build contact form for sending me an email
const EmailSendButton = styled.button`
`

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

  return (
    <div>
      <NavWrapper />
      <h1 style={{color: 'white'}}>
        This is the Contact page, render form here
      </h1>
      <EmailSendButton onClick={() => {}}/>
    </div>
  )
}