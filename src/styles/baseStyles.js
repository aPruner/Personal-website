import styled, {css} from 'styled-components'

const baseTextStyles = css`
  font-family: Manaspace;
  color: #add8e6;
`

const baseLinkStyles = css`
  ${baseTextStyles};
  background: transparent;
  border-radius: 3px;
  border: none;
  text-decoration: none;
  margin: 20px;
  font-size: 22px;
  
  @media (max-width: 900px) {
    font-size: 12px;
  }
  
  :hover {
    color: #2168db;
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    transform: scale(1.5);
    cursor: pointer;
  }
  
  :visited {
    color: #4f317d;
  }
`

const pageContainerStyles = css`
  margin: 0 auto;
`

const flexContainerStyles = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const buttonStyles = css`
`

const inputStyles = css`
  border-radius: 5px;
  font-size: 16px;
  padding: 4px 8px;
  width: 280px;
`

const inputLabelStyles = css`
  ${baseTextStyles};
  display: block;
  margin-bottom: 10px;
`

const baseTextInputStyles = css`
  font-family: Arial;
`

const inputContainerStyles = css`
  ${baseTextInputStyles};
  width: 300px;
  margin: 10px 0;
`

const textAreaStyles = css`
  ${baseTextInputStyles};
  border-radius: 5px;
  font-size: 16px;
  resize: none;
  padding: 4px 9px;
  width: 280px;
  height: 100px;
`

export default {
  baseTextStyles,
  baseLinkStyles,
  pageContainerStyles,
  flexContainerStyles,
  buttonStyles,
  inputStyles,
  inputLabelStyles,
  inputContainerStyles,
  textAreaStyles
}