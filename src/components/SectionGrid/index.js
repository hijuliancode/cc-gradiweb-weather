import React from 'react'
import styled from 'styled-components'

// Components
import Skeleton from '../shared/skeleton'
import AddLocation from '../AddLocation'
import Forecast from '../Forecast'
import Location from '../Location'
import Places from '../Places'
import Reviewers from '../Reviewers'

const Grid = styled.div`
  width: 100%;
  @media screen and (${props => props.theme.mq.lg}) {
    display: flex;
    justify-content: space-between;
  }
  p { margin-top: 0; }
`
const AreaForecast = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  grid-area: area_forecast;
  margin-bottom: ${props => props.theme.baseSize * 6}px;
  @media screen and (${props => props.theme.mq.lg}) {
    margin-bottom: 0;
    width: 175px;
  }
`
const AreaForecastItems = styled.div`
  display: flex;
  .Forecast {
    flex: 1;
  }
  @media screen and (${props => props.theme.mq.xm}) {
    flex-direction: column;
    .Forecast {
      margin-bottom: ${props => props.theme.baseSize * 2}px;
    }
  }
  @media screen and (${props => props.theme.mq.sm}) {
    &:nth-child(2n) {
      margin: 0 5px;
    }
  }
  @media screen and (${props => props.theme.mq.lg}) {
    display: block;
    .Forecast {
      flex: 100%;
      &:nth-child(2n) { margin: 0; }
      &:not(:last-child) {
        margin-bottom: ${props => props.theme.baseSize + 1}px; /** +1px to make pixel perfect */
      }
    }
  }
`
const AreaPlaces = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  grid-area: area_places;
  margin-bottom: ${props => props.theme.baseSize * 6}px;
  @media screen and (${props => props.theme.mq.md}) {
    margin-bottom: 0;
  }
  @media screen and (${props => props.theme.mq.lg}) {
    width: 310px;
  }
`
const AreaLocations = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  grid-area: area_locations;
  @media screen and (${props => props.theme.mq.lg}) {
    width: 210px;
  }
  ._locations {
    /* background-color: red; */
    flex: 1;
    margin-bottom: ${props => props.theme.baseSize * 2}px;
    margin-top: ${props => props.theme.baseSize * 2}px;
    position: relative;
    .Location {
      &:not(:last-child) {
        margin-bottom: ${props => props.theme.baseSize * 3}px;
      }
    }
  }
`
const AreaTitle = styled.h2`
  display: flex;
  font-size: 1.1rem;
  font-weight: 300;
  margin: 0 0 1rem;
  @media screen and (${props => props.theme.mq.md}) {
    margin: 0 0 2rem;
  }
  span {
    display: inline-block;
    font-weight: 600;
    margin-right: ${props => props.theme.baseSize}px;
  }
  .separator { flex: 1; }
`

const SectionGridComponent = ({forecasts, reviewers, locations, loading}) => {
  const forecastLists = []
  if (forecasts) {
    for (let i = 0; i < forecasts.list.length; i+=8) {
      const temporary = forecasts.list[i]
      forecastLists.push(temporary)
    }
  }
  return (
    <Grid>
      <AreaForecast>
        <AreaTitle>
          <span>3 Days </span> Forecast
        </AreaTitle>
        {(loading || !forecastLists) && <Skeleton />}
        {(!loading && forecastLists) &&
          <AreaForecastItems>
            {
              forecastLists.slice(0, 3).map((forecast) => (
                <Forecast forecast={forecast} key={forecast.dt} />
              ))
            }
          </AreaForecastItems>
        }
      </AreaForecast>
      <AreaPlaces>
        <AreaTitle>
          <span>Place to</span> visit
          <div className="separator"></div>
          {!loading &&
            <Reviewers reviewers={reviewers} />
          }
        </AreaTitle>
        <Places loading={loading} />
      </AreaPlaces>
      <AreaLocations>
        <div className="_locations">
          {
            locations.map(location => (
              <Location location={location} loading={loading} key={location.id} />
            ))
          }
          {/* <Location topPosition={150}/> */}
        </div>
        <AddLocation loading={loading} />
      </AreaLocations>
    </Grid>
  )
}

export default SectionGridComponent
