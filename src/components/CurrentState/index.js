import React from 'react'
import styled from 'styled-components'
import CurrentStateMiscTop from '../../images/design/misc/current-state-misc--top.svg'
import CurrentStateMiscBottom from '../../images/design/misc/current-state-misc--bottom.svg'

const CurrentState = styled.div`
  ${props => props.theme.isRadious.x4};
  background-color: ${props => props.theme.primaryColor};
  box-shadow: 10px 15px 25px 0px rgba(1,50,88,0.5); /* TODO: add variable to this box-shadow */
  left: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 15;
`
const _currentState = styled.div`
  ${props => props.theme.isRadious.x4};
  align-items: center;
  color: white;
  display: block;
  display: flex;
  font-size: 1.8rem;
  height: 70px;
  justify-content: center;
  position: relative;
  width: 75px;
  &:after {
    background-repeat: no-repeat;
    background-size: contain;
    content: "";
    display: block;
    height: 10px;
    left: 0;
    position: absolute;
    width: 15px;
  }
`
const CurrentStateIcon = styled(_currentState)`
  background-color: ${props => props.theme.primaryColor_dark};
  border-top-left-radius: 0;
  margin-bottom: -10px;
  z-index: 10;
  &:after {
    background-image: url(${CurrentStateMiscTop});
    top: -6px;
  }
  img {
    max-width: 100%;
  }
`
const CurrentStateScale = styled(_currentState)`
  background-color: ${props => props.theme.primaryColor};
  border-bottom-left-radius: 0;
  font-family: ${props => props.theme.font.numbers.name};
  sup {
    font-size: 0.8rem;
  }
  &:after {
    background-image: url(${CurrentStateMiscBottom});
    bottom: -6px;
  }
`

const CurrentStateComponent = ({weather, loading}) => {
  return (
    <CurrentState>
      <CurrentStateIcon>
        {!loading && <img src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt={weather.weather[0].description} />}
      </CurrentStateIcon>
      <CurrentStateScale>
        {!loading &&
          <span>
            {(weather.main.temp).toFixed(1)}<sup>°C</sup>
          </span>
        }
      </CurrentStateScale>
    </CurrentState>
  )
}

export default CurrentStateComponent
