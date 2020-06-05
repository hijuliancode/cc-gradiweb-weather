import React from 'react'
import styled from 'styled-components'
import Icon from '../shared/Icon'

const Hero = styled.picture`
  ${props => props.theme.isRadious.x3}
  color: ${props => props.theme.whiteColor};
  display: flex;
  height: 40%;
  justify-content: flex-end;
  overflow: hidden;
  padding: ${props => props.theme.baseSize * 5}px;
  position: relative;
  @media screen and (min-width: 576px) {
    justify-content: flex-start;
    ${props => props.theme.isRadious.x6}
  }
  .Hero__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 10;
    .Location {
      align-items: center;
      display: flex;
      margin-bottom: ${props => props.theme.baseSize * 2}px;
      i { margin-right: ${props => props.theme.baseSize}px; }
      span {
        color: ${props => props.theme.primaryColor};
      }
    }
    .Location-map {
      background-color: ${props => props.theme.primaryColor};
      height: 55px;
      width: 120px;
    }
  }
`
const HeroImage = styled.img`
  display: block;
  height: 100%;
  left: 0;
  max-width: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`
const HeroBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`

const HeroComponent = (props) => {
  return (
    <Hero>
      <HeroImage src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Centro_internacional.JPG" alt="City" />
      <HeroBackdrop />
      <div className="Hero__content">
        <div className="Location">
          <Icon pinLocation primaryColor></Icon>
          <span>Bogotá</span>
        </div>
        <div className="Location-map"></div>
      </div>
    </Hero>
  )
}

export default HeroComponent
