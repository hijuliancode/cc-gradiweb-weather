import React from 'react'
import styled from 'styled-components'

const ForecastElm = styled.div`
  ${props => props.theme.isRadious.x3}
  background-color: ${props => props.theme.whiteColor};
  border: 1px solid ${props => props.theme.lightColor};
  box-shadow: 0 0px 15px hsl(206.3, 17%, 91.6%); /* TODO: add variable to this color box-shadow */
  display: grid;
  min-height: 50px;
  grid-template-areas:
    'area_icon area_info area_average'
  ;
  position: relative;
  @media screen and (${props => props.theme.mq.lg}) {
    grid-template-columns: 45px 1fr 55px;
  }
  p {
    margin: 0;
  }
`
const AreaIcon = styled.div`
  align-items: center;
  display: flex;
  grid-area: area_icon;
  justify-content: center;
  img { max-width: 80%; }
`
const AreaInfo = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  grid-area: area_info;
  justify-content: center;
  h4, p { line-height: 1em; margin: 0; }
  h4 {
    font-size: 0.6rem;
    font-weight: ${props => props.theme.font.primary[400]};
    margin-bottom: ${props => props.theme.baseSize}px;
  }
  p {
    font-size: 0.55rem;
    font-weight: ${props => props.theme.font.primary[200]};
    letter-spacing: 0.8px;
  }

`
const AreaAverage = styled.div`
  ${props => props.theme.isRadious.x3}
  align-items: center;
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.whiteColor};
  display: flex;
  font-family: ${props => props.theme.font.numbers.name};
  font-size: 14px;
  grid-area: area_average;
  height: 50px;
  justify-content: center;
  min-width: 55px;
  position: absolute;
  right: 0px;
  top: -1px;
`

const checkDay = (time_text) => {
  const dayNumber = new Date(time_text).getDay()
  let dayText;
  switch (dayNumber) {
    case 0:
      dayText = 'Sunday'
      break;
    case 1:
      dayText = 'Monday'
      break;
    case 2:
      dayText = 'Tuesday'
      break;
    case 3:
      dayText = 'Wednesday'
      break;
    case 4:
      dayText = 'Thursday'
      break;
    case 5:
      dayText = 'Friday'
      break;
    default:
      dayText = 'Saturday'
      break;
  }
  return dayText
}

const Forecast = ({forecast}) => {
  const day = checkDay(forecast.dt_txt)
  return (
    <ForecastElm className="Forecast">
      <AreaIcon>
        <img src={`https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`} alt={forecast.weather[0].description} />
      </AreaIcon>
      <AreaInfo>
        <h4>{day}</h4>
        <p>{forecast.weather[0].main}</p>
      </AreaInfo>
      <AreaAverage>
        <span>{((forecast.main.temp) * 9 / 5 + 32).toFixed(1)}<sup>F</sup></span> / <span>{forecast.main.temp.toFixed(1)}<sup>C</sup></span>
      </AreaAverage>
    </ForecastElm>
  )
}

export default Forecast
