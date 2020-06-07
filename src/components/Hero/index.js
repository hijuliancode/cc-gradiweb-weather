import React from 'react'
import styled from 'styled-components'
import Icon from '../shared/Icon'

const Hero = styled.picture`
  ${props => props.theme.isRadious.x3}
  color: ${props => props.theme.whiteColor};
  display: flex;
  height: 220px;
  justify-content: flex-end;
  overflow: hidden;
  padding: ${props => props.theme.baseSize * 5}px;
  position: relative;
  width: 100%;
  @media screen and (${props => props.theme.mq.sm}) {
    ${props => props.theme.isRadious.x4};
    justify-content: flex-start;
  }
  @media screen and (${props => props.theme.mq.md}) {
    ${props => props.theme.isRadious.x6};
  }
  @media screen and (${props => props.theme.mq.lg}) {
    ${props => props.theme.isRadious.x7};
    padding-left: ${props => props.theme.baseSize * 15}px;
  }
  .Hero__content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: ${props => props.theme.baseSize * 6}px;
    position: relative;
    z-index: 10;
    .Location {
      align-items: center;
      display: flex;
      margin-bottom: ${props => props.theme.baseSize * 2}px;
      i { margin-right: ${props => props.theme.baseSize * 2}px; }
      span {
        color: ${props => props.theme.primaryColor};
        font-weight: ${props => props.theme.font.primary[500]};
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
      <HeroImage src="https://i.pinimg.com/originals/04/e2/a4/04e2a4a735ff613ff1ee802aaa44b03f.jpg" alt="City" />
      <HeroBackdrop />
      <div className="Hero__content">
        <div className="Location">
          <Icon pinLocation primaryColor></Icon>
          <span>Bogotá</span>
        </div>
        {/* <div className="Location-map"></div> */}
      </div>
    </Hero>
  )
}

export default HeroComponent
