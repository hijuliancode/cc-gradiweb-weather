import styled from 'styled-components'
import iconLocation from '../../images/design/icons/icon-location.svg'
import iconLocationPrimary from '../../images/design/icons/icon-location--primary.svg'
import iconLocationWhite from '../../images/design/icons/icon-location--white.svg'
import iconReviewers from '../../images/design/icons/icon-reviewers.svg'
import iconReviewersPrimary from '../../images/design/icons/icon-reviewers--primary.svg'

const Icon = styled.i`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
  height: ${props => props.theme.baseSize * 6}px;
  width: ${props => props.theme.baseSize * 6}px;
  ${props => {
    if (props.pinLocation) {
      if (props.primaryColor) {
        return `background-image: url(${iconLocationPrimary})`
      }
      if (props.whiteColor) {
        return `background-image: url(${iconLocationWhite})`
      }
      return `background-image: url(${iconLocation})` // Default color is black
    }
    if (props.iconReviewers) {
      if (props.primaryColor) {
        return `background-image: url(${iconReviewersPrimary})`
      }
      return `background-image: url(${iconReviewers})`
    }
  }}
`

export default Icon
