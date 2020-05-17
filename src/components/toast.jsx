// Core stuff
import React from 'react'
import styled from 'styled-components'

// Components
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CustomToast = styled(ToastContainer)`
  .Toastify__toast {
    font-family: Manaspace;
    color: #000;
    border-radius: 5px;
  }
`

function triggerToast(message) {
  toast(message)
}

function Toast(props) {
  return (
    <CustomToast
      position="bottom-center"
      autoClose={3000}
      hideProgressBar
      closeOnClick
      pauseOnFocusLoss
      pauseOnHover
      draggable={false}
    />
  )
}

export {
  triggerToast,
  Toast
}