import React from 'react'
import styled from 'styled-components'

// Components
import AddLocation from '../AddLocation'
import Forecast from '../Forecast'
import Location from '../Location'
import Places from '../Places'
import Reviewers from '../Reviewers'

const Grid = styled.div`
  width: 100%;
  @media screen and (${props => props.theme.mq.md}) {
    display: grid;
    grid-column-gap: 40px;
    grid-template-areas:
      'area_forecast area_forecast'
      'area_locations area_places'
    ;
  }
  @media screen and (${props => props.theme.mq.lg}) {
    display: flex;
    justify-content: space-between;
  }
  p { margin-top: 0; }
`
const AreaForecast = styled.div`
  background-color: white;
  grid-area: area_forecast;
  @media screen and (${props => props.theme.mq.lg}) {
    width: 145px;
  }
`
const AreaPlaces = styled.div`
  background-color: white;
  grid-area: area_places;
  @media screen and (${props => props.theme.mq.lg}) {
    width: 310px;
  }
`
const AreaLocations = styled.div`
  background-color: white;
  grid-area: area_locations;
  @media screen and (${props => props.theme.mq.lg}) {
    width: 210px;
  }
`
const AreaTitle = styled.h2`
  font-weight: 300;
  font-size: 1.1rem;
  margin: 0 0 2rem;
  span {
    font-weight: 600;
  }
`

const SectionGridComponent = (props) => {
  return (
    <Grid>
      <AreaForecast>
        <AreaTitle>
          <span>3 Days</span> Forecast
        </AreaTitle>
        <Forecast />
        <Forecast />
        <Forecast />
      </AreaForecast>
      <AreaPlaces>
        <AreaTitle>
          <span>Place to</span> visit
        </AreaTitle>
        <Reviewers/>
        <Places/>
      </AreaPlaces>
      <AreaLocations>
        <Location/>
        <AddLocation/>
      </AreaLocations>
    </Grid>
  )
}

export default SectionGridComponent
