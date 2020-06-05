import React from 'react'
import gradiIsotipo from './images/design/misc/gradiweb-isotipo.png'
import styled from 'styled-components'

import AddLocation from './components/AddLocation/'
import CurrentState from './components/CurrentState/'
import Forecast from './components/Forecast/'
import HeroComponent from './components/Hero/'
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
  right: 5px;
  top: 10px;
  width: 36px;
  z-index: 10;
  @media screen and (min-width: 576px) {
    right: 40px;
    top: 20px;
  }
`
const Container = styled.main`
  ${props => props.theme.isRadious.x3}
  background-color: ${props => props.theme.whiteColor};
  box-shadow: rgba(#c8d1d8, 0.5);
  height: 95vh;
  padding: ${props => props.theme.baseSize * 4}px ${props => props.theme.baseSize * 4}px;
  width: 95vw;
  @media screen and (min-width: 576px) {
    ${props => props.theme.isRadious.x7}
    height: 80vh;
    padding: ${props => props.theme.baseSize * 6}px ${props => props.theme.baseSize * 8}px;
    width: 80vw;
  }
`
const SectionTop = styled.section`
  /* background-color: blue; */
`
const SectionBottom = styled.section`
  /* background-color: red; */
`

const Root = () => (
  <Wrapper>
    <Brand src={gradiIsotipo} />

    <Container>
      <SectionTop>
        <CurrentState/>
        <HeroComponent/>
      </SectionTop>

      <SectionBottom>
        <Forecast/>
        <Places/>
        <Reviewers/>
        <AddLocation/>
        <Location/>
      </SectionBottom>
    </Container>

    <Alerts/>
  </Wrapper>
)

export default Root
