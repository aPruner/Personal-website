import React, { useState } from 'react'
import styled from 'styled-components'

// TODO: Design and build Contact page, which will use the emailService serverless function
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
      <EmailSendButton onClick={() => {}}/>
    </div>
  )
}