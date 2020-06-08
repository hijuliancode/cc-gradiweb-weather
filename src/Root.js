import React, { useEffect, useState } from 'react'
import gradiIsotipo from './images/design/misc/gradiweb-isotipo.png'
import styled from 'styled-components'

import CurrentStateComponent from './components/CurrentState/'
import HeroComponent from './components/Hero/'
import SectionGridComponent from './components/SectionGrid'

const { getWeather, getForecasts, getReviewers } = require('./services/')

const Alerts = styled.div`
  display: none;
`
const Wrapper = styled.div`
  align-items: flex-start;
  display: flex;
  height: 100vh;
  justify-content: center;
  padding-top: ${props => props.theme.baseSize * 6}px;
  position: relative;
  width: 100vw;
`
const Brand = styled.img`
  height: 30px;
  object-fit: content;
  position: absolute;
  right: 5px;
  top: 10px;
  width: 27px;
  z-index: 10;
  @media screen and (${props => props.theme.mq.sm}) {
    right: 15px;
    top: 15px;
  }
  @media screen and (${props => props.theme.mq.md}) {
    height: 40px;
    right: 20px;
    top: 20px;
    width: 36px;
  }
`
const Container = styled.main`
  ${props => props.theme.isRadious.x3}
  background-color: ${props => props.theme.whiteColor};
  box-shadow: 0 10px 10px hsl(206.3, 17%, 81.6%); /* TODO: add variable to this color box-shadow */
  display: flex;
  flex-flow: column;
  min-height: 95vh;
  width: 95vw;
  @media screen and (${props => props.theme.mq.sm}) {
    ${props => props.theme.isRadious.x4}
    min-height: initial;
    width: 90vw;
  }
  @media screen and (${props => props.theme.mq.md}) {
    ${props => props.theme.isRadious.x6}
    width: 80vw;
  }
  @media screen and (${props => props.theme.mq.lg}) {
    ${props => props.theme.isRadious.x7}
    width: 855px;
  }
`
const _sections = styled.section`
  flex-basis: 100%;
  display: flex;
  padding: ${props => props.theme.baseSize * 4}px ${props => props.theme.baseSize * 4}px;
  @media screen and (${props => props.theme.mq.sm}) {
    padding: ${props => props.theme.baseSize * 6}px ${props => props.theme.baseSize * 6}px;
  }
  @media screen and (${props => props.theme.mq.md}) {
    padding: ${props => props.theme.baseSize * 8}px ${props => props.theme.baseSize * 8}px;
  }
  @media screen and (${props => props.theme.mq.lg}) {
    padding: ${props => props.theme.baseSize * 10}px ${props => props.theme.baseSize * 10}px;
  }
`
const SectionTop = styled(_sections)`
  position: relative;
  margin-bottom: ${props => props.theme.baseSize * 2}px;
  @media screen and (${props => props.theme.mq.md}) {
    margin-bottom: 0;
  }
`
const SectionBottom = styled(_sections)`
  flex: 1;
  padding-top: 0;
  position: relative;
  @media screen and (${props => props.theme.mq.sm}) { padding-top: 0; }
  @media screen and (${props => props.theme.mq.md}) { padding-top: 0; }
  @media screen and (${props => props.theme.mq.lg}) { padding-top: 0; }
`
const NavTranslation = styled.ul `
  color: ${props => props.theme.blackColor};
  display: flex;
  font-size: 1.1rem;
  left: ${props => props.theme.baseSize * 4}px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: fixed;
  text-align: right;
  text-transform: uppercase;
  top: 0;
  @media screen and (${props => props.theme.mq.lg}) {
    flex-direction: column;
    top: 50%;
    right: ${props => props.theme.baseSize}px;
    transform: translateY(-50%);
    li {
      margin-bottom: ${props => props.theme.baseSize * 2}px;
    }
  }
  li {
    margin-right: ${props => props.theme.baseSize * 2}px;
    @media screen and (${props => props.theme.mq.lg}) {
      margin-right: 0;
    }
    &:hover {
      cursor: pointer;
      font-weight: ${props => props.theme.font.primary[500]};
    }
  }
`

const Root = () => {
  const [loading, setLoading] = useState(true)
  // const [currentScale, setCurrentScale] = useState('Celcius')
  const [weather, setWeather] = useState(null)
  const [forecasts, setForecast] = useState(null)
  const [reviewers, setReviewer] = useState(null)
  // const [places, setPlace] = useState([])
  const [locations, setLocation] = useState([])

  useEffect(() => {
    getWeather()
      .then(response => {
        let { coord: { lat, lon } } = response
        setWeather(response)
        return getForecasts(lat, lon)
      })
      .then(response => {
        setForecast(response)
        return getReviewers()
      })
      .then(response => {
        setReviewer(response)
        return getWeather('Paris')
      })
      .then(response => {
        setLocation([...locations, response])
        setLoading(false)
      })
      .catch(error => console.error(error))
    }, [])
  return (
    <Wrapper>
      <Brand src={gradiIsotipo} />
      <NavTranslation>
        <li>FR</li>
        <li>ES</li>
        <li>EN</li>
      </NavTranslation>
      <Container>
        <SectionTop>
          <CurrentStateComponent weather={weather} loading={loading} />
          <HeroComponent  weather={weather} loading={loading} />
        </SectionTop>
        <SectionBottom noPaddingTop>
          <SectionGridComponent forecasts={forecasts} reviewers={reviewers} locations={locations} loading={loading}/> {/* Section Grid with dynamic information */}
        </SectionBottom>
      </Container>
      <Alerts/>
    </Wrapper>
  )
}
export default Root
