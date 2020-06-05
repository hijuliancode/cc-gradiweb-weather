import React from 'react'
import gradiIsotipo from './images/design/misc/gradiweb-isotipo.png'
import styled from 'styled-components'

import AddLocation from './components/AddLocation/'
import CurrentState from './components/CurrentState/'
import Forecast from './components/Forecast/'
import Hero from './components/Hero/'
import Location from './components/Location/'
import Places from './components/Places/'
import Reviewers from './components/Reviewers/'

const Alerts = styled.div`
  display: none;
`
const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  position: relative;
`
const Brand = styled.img`
  height: 40px;
  object-fit: content;
  position: absolute;
  right: 40px;
  top: 20px;
  width: 36px;
`
const Container = styled.main`
  background-color: ${props => props.theme.whiteColor};
  border-radius: ${props => props.theme.baseSize * 6}px;
  height: 80vh;
  padding: ${props => props.theme.baseSize * 6}px ${props => props.theme.baseSize * 8}px;
  width: 80vw;
`

const Root = () => (
  <Wrapper>
    <Brand src={gradiIsotipo} />

    <Container>
      <AddLocation/>
      <CurrentState/>
      <Forecast/>
      <Hero/>
      <Location/>
      <Places/>
      <Reviewers/>
    </Container>

    <Alerts/>
  </Wrapper>
)

export default Root
