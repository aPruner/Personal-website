// Core stuff
import styled from 'styled-components'

// Base styles
import baseStyles from '../styles/baseStyles'

const PageContainerDiv = styled.div`
  ${baseStyles.pageContainerStyles};
`

const FlexContainerDiv = styled.div`
  ${baseStyles.flexContainerStyles};
`

const Button = styled.button`
  ${baseStyles.buttonStyles};
`

const Input = styled.input`
  ${baseStyles.inputStyles};
`

const InputLabel = styled.label`
  ${baseStyles.inputLabelStyles};
`

const InputContainer = styled.div`
  ${baseStyles.inputContainerStyles};
`

const TextArea = styled.textarea`
  ${baseStyles.textAreaStyles};
`

export default {
  PageContainerDiv,
  FlexContainerDiv,
  Button,
  Input,
  InputLabel,
  InputContainer,
  TextArea
}