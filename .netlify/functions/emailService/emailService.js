require('dotenv')
const sendGrid = require('@sendgrid/mail')
const { validateEmail, validateLength } = require('./validations')
const { CONTACT_EMAIL_ADDRESS, SENDGRID_API_KEY } = process.env

exports.handler = async (event, context) => {
  sendGrid.setApiKey(SENDGRID_API_KEY)

  const body = JSON.parse(event.body)

  try {
    validateLength('body.name', body.name, 3, 50)
  } catch (err) {
    // TODO: Is 403 the right status code for these types of errors?
    return { statusCode: 403, body: err.toString() }
  }

  try {
    validateEmail('body.emailAddress', body.emailAddress)
  } catch (err) {
    return { statusCode: 403, body: err.toString() }
  }

  try {
    validateLength('body.messageContent', body.messageContent, 10, 1000)
  } catch (err) {
    return { statusCode: 403, body: err.toString() }
  }

  const msg = {
    to: CONTACT_EMAIL_ADDRESS,
    from: `${body.emailAddress}`,
    subject: `${body.subject}`,
    text: body.messageContent
  }

  try {
    console.log('sending email')
    sendGrid.send(msg)
    console.log('noice')
    return { statusCode: 200, body: 'Noice! e-mail sent' }
  } catch (err) {
    // TODO: fix error handling
    return { statusCode: 500, body: err.toString() }
  }
}
