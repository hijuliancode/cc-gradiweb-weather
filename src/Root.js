import React from 'react'
import gradiIsotipo from './images/design/misc/gradiweb-isotipo.png'
import styled from 'styled-components'

import AddLocation from './components/AddLocation/'
import CurrentStateComponent from './components/CurrentState/'
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
  width: 100vw;
`
const Brand = styled.img`
  height: 40px;
  object-fit: content;
  position: absolute;
  right: 5px;
  top: 10px;
  width: 36px;
  z-index: 10;
  @media screen and (${props => props.theme.mq.sm}) {
    right: 15px;
    top: 15px;
  }
  @media screen and (${props => props.theme.mq.md}) {
    right: 20px;
    top: 20px;
  }
`
const Container = styled.main`
  ${props => props.theme.isRadious.x3}
  background-color: ${props => props.theme.whiteColor};
  box-shadow: rgba(#c8d1d8, 0.5);
  min-height: 95vh;
  padding: ${props => props.theme.baseSize * 4}px ${props => props.theme.baseSize * 4}px;
  width: 95vw;
  @media screen and (${props => props.theme.mq.sm}) {
    ${props => props.theme.isRadious.x4}
    min-height: 90vh;
    padding: ${props => props.theme.baseSize * 6}px ${props => props.theme.baseSize * 6}px;
    width: 90vw;
  }
  @media screen and (${props => props.theme.mq.md}) {
    ${props => props.theme.isRadious.x6}
    padding: ${props => props.theme.baseSize * 8}px ${props => props.theme.baseSize * 8}px;
    width: 80vw;
  }
  @media screen and (${props => props.theme.mq.lg}) {
    ${props => props.theme.isRadious.x7}
    padding: ${props => props.theme.baseSize * 10}px ${props => props.theme.baseSize * 10}px;
    width: 70vw;
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
        <CurrentStateComponent />
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
