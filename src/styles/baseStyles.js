import styled, {css} from 'styled-components'

const baseTextStyles = css`
  font-family: Manaspace;
  color: #add8e6;
`

const baseLinkStyles = css`
  ${baseTextStyles}
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

export default {
  baseTextStyles,
  baseLinkStyles,
  pageContainerStyles
}