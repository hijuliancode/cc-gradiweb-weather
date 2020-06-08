import React from 'react'
import styled from 'styled-components'
import Icon from '../shared/Icon'

import Skeleton from '../shared/skeleton'

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
        font-size: 1.1rem;
        font-weight: ${props => props.theme.font.primary[500]};
        text-shadow: 0 0 1px black;
      }
    }
    .Location-map {
      background-color: ${props => props.theme.primaryColor};
      height: 55px;
      width: 120px;
    }
  }
  a { color: inherit; text-decoration: none; }
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
  background-color: rgba(0, 155, 255, 0.1);
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`

const HeroComponent = ({loading, weather}) => {
  return (
    <Hero>
      {loading && <Skeleton />}
      {!loading &&
        <a href={`https://en.wikipedia.org/wiki/${weather.name}`} target="_blank" rel="noopener noreferrer">
          <HeroImage src={`https://source.unsplash.com/755x220/?${(weather.sys.country === 'CO') ? 'colombia' : 'france'},Outdoors,Symbol,Architecture`} alt="City" />
          <HeroBackdrop />
          <div className="Hero__content">
            <div className="Location">
              <Icon pinLocation primaryColor></Icon>
              <span>{weather.name}</span>
            </div>
            {/* <div className="Location-map"></div> */}
          </div>
        </a>
      }
    </Hero>
  )
}

export default HeroComponent
