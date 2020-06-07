import React from 'react'
import locationMisc from '../../images/design/misc/add-location.svg'
import styled from 'styled-components'
import Icon from '../shared/Icon'

const AddLocationElm = styled.div`
  ${props => props.theme.isRadious.x3};
  align-items: center;
  background-color: ${props => props.theme.whiteColor};
  border: 1px dashed ${props => props.theme.grayColor};
  box-shadow: 0 5px 15px hsl(206.3, 17%, 81.6%); /* TODO: add variable to this color box-shadow */
  display: flex;
  flex-direction: column;
  height: 115px;
  justify-content: flex-start;
  overflow: hidden;
  padding: ${props => props.theme.baseSize * 6}px;
  position: relative;
  img {
    bottom: -6px;
    left: 50%;
    max-width: 100%;
    position: absolute;
    transform: translate(-50%);
  }
  i {
    height: 16px;
    margin-top: ${props => props.theme.baseSize * 2}px;
  }
  .LocationCanvas {
    border-color: ${props => props.theme.primaryColor};
    height: 200px;
    position: absolute;
    top: 110px;
    transform: rotate(90deg);
    z-index: 5;
  }
`
const AddLocationButton = styled.button`
  ${props => props.theme.isRadious.x5};
  background-color: ${props => props.theme.primaryColor_light2};
  border: 0;
  color: ${props => props.theme.primaryColor_dark};
  font-size: 0.6rem;
  line-height: 1;
  padding: ${props => props.theme.baseSize * 2}px ${props => props.theme.baseSize * 6}px;
  z-index: 10;
`

const addCanvas = function() {
  try {
    let c = document.getElementById('locationCanvas')
    let ctx = c.getContext('2d')
    ctx.beginPath()
    ctx.strokeStyle = "#7d67f0";
    ctx.arc(100, 75, 50, 0.5 * Math.PI, 1.5 * Math.PI)
    ctx.stroke()
  } catch {
    console.error("=> can't load the canvas")
  }
  
}

const AddLocation = (props) => {
  document.addEventListener('DOMContentLoaded', addCanvas)

  return (
    <AddLocationElm>
      <AddLocationButton stype="button">Add Locations</AddLocationButton>
      <Icon pinLocation primaryColor></Icon>
      <canvas className="LocationCanvas" id="locationCanvas"></canvas>
      <img src={locationMisc} alt="Add location Illustration" />
    </AddLocationElm>
  )
}

export default AddLocation
