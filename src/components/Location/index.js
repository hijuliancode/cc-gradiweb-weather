import React, { Fragment } from 'react'
import styled from 'styled-components'
import Skeleton from '../shared/skeleton'

const LocationElm = styled.div`
  ${props => props.theme.isRadious.x3};
  background-color: ${props => props.theme.whiteColor};
  box-shadow: 0 5px 15px hsl(206.3, 17%, 81.6%); /* TODO: add variable to this color box-shadow */
  display: flex;
  flex-direction: column;
  min-height: 90px;
  overflow: hidden;
  @media screen and (${props => props.theme.mq.lg}) {
    margin-top: -15px;
  }
`
const LocationContent = styled.div`
  position: relative;
  &:after {
    clear: both;
    content: '';
  }
`
const LocationIcon = styled.div`
  ${props => props.theme.isRadious.x3};
  align-items: center;
  background-color: ${props => props.theme.primaryColor_light};
  display: flex;
  float: left;
  height: 65px;
  justify-content: center;
  margin-right: ${props => props.theme.baseSize * 3}px;
  width: 65px;
`
const LocationInfo = styled.div`
  align-items: center;
  display: inline-flex;
  height: 65px;
  justify-content: center;
  margin-bottom: ${props => props.theme.baseSize * 3}px;
  padding: ${props => props.theme.baseSize * 3}px;
  width: calc(100% - 77px); /* 100% - 65px of icon and 12px of margin */
  & > ._wrapper {
    align-items: center;
    display: flex;
    justify-content: center,
  }
  .LocationInfo__num {
    font-family: ${props => props.theme.font.numbers.name};
    font-size: 2rem;
    margin-bottom: 0;
  }
  .LocationInfo__place {
    font-size: 0.8rem;
    font-weight: ${props => props.theme.font.primary[300]};
    margin-bottom: 0;
    & > span { display: block; }
    span:first-child {
      font-weight: ${props => props.theme.font.primary[500]};
    }
    span:last-child {
      font-size: 0.6rem;
    }
  }
  .separator {
    background-color: ${props => props.theme.lightColor};
    display: block;
    height: 24px;
    margin: 0 8px;
    width: 1px;
  }
`
const LocationFooter = styled.ul`
  color: ${props => props.theme.grayColor};
  display: flex;
  font-size: 0.6rem;
  justify-content: space-between;
  list-style-type: none;
  margin: 0;
  padding: 0 ${props => props.theme.baseSize * 4}px ${props => props.theme.baseSize * 2}px;
`

const toDegToDirection = (degree) => {
  if(degree>337.5) return 'Northerly'
  if(degree>292.5) return 'North Westerly'
  if(degree>247.5) return 'Westerly'
  if(degree>202.5) return 'South Westerly'
  if(degree>157.5) return 'Southerly'
  if(degree>122.5) return 'South Easterly'
  if(degree>67.5) return 'Easterly'
  if(degree>22.5) return 'North Easterly'
  return 'Northerly'
}

const Locations = ({location, loading}) => {
  return (
    <LocationElm className="Location">
      {loading && <Skeleton />}
      {!loading &&
        <Fragment>
          <LocationContent>
            <LocationIcon>
              {!loading && <img src={`https://openweathermap.org/img/w/${location.weather[0].icon}.png`} alt={location.weather[0].description} />}
            </LocationIcon>
            <LocationInfo>
              <div className="_wrapper">
                <p className="LocationInfo__num">{(location.main.temp).toFixed(1)}°C</p>
                <span className="separator"></span>
                <p className="LocationInfo__place">
                  <span>{location.name}</span>
                  <span>{location.sys.country}</span>
                </p>
              </div>
            </LocationInfo>
          </LocationContent>
          <LocationFooter>
            <li>Humidity {location.main.humidity}%</li>
            <li>{toDegToDirection(location.wind.deg)}</li>
            <li>{location.wind.speed}km/h</li>
          </LocationFooter>
        </Fragment>
      }
    </LocationElm>
  )
}

export default Locations
