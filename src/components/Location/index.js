import React from 'react'
import styled from 'styled-components'

const LocationElm = styled.div`
  ${props => props.theme.isRadious.x3};
  background-color: ${props => props.theme.whiteColor};
  box-shadow: 0 5px 15px hsl(206.3, 17%, 81.6%); /* TODO: add variable to this color box-shadow */
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => props.theme.baseSize * 5}px;
  min-height: 90px;
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
  /* border-top-left-radius: ${props => props.theme.baseSize * 3}px; */ /** TODO: Review this border-radius */
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
  font-size: 0.7rem;
  justify-content: space-between;
  list-style-type: none;
  margin: 0;
  padding: 0 ${props => props.theme.baseSize * 3}px ${props => props.theme.baseSize * 3}px;
`

const Locations = (props) => {
  return (
    <LocationElm>
      <LocationContent>
        <LocationIcon></LocationIcon>
        <LocationInfo>
          <div className="_wrapper">
            <p className="LocationInfo__num">29°C</p>
            <span className="separator"></span>
            <p className="LocationInfo__place">
              <span>Lyon</span>
              <span>Francia</span>
            </p>
          </div>
        </LocationInfo>
      </LocationContent>
      <LocationFooter>
        <li>Humidity 48%</li>
        <li>West</li>
        <li>8.3km/h</li>
      </LocationFooter>
    </LocationElm>
  )
}

export default Locations
