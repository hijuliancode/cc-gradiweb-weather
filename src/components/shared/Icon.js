import styled from 'styled-components'
import iconLocation from '../../images/design/icons/icon-location.svg'
import iconLocationPrimary from '../../images/design/icons/icon-location-primary.svg'

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
      return `background-image: url(${iconLocation})` // Default color is black
    }
  }}
`

export default Icon
