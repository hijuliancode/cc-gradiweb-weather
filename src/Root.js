import React from 'react'
import gradiIsotipo from './images/design/misc/gradiweb-isotipo.png'
import styled from 'styled-components'

import CurrentStateComponent from './components/CurrentState/'
import HeroComponent from './components/Hero/'
import SectionGridComponent from './components/SectionGrid'

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
  box-shadow: 0 10px 10px hsl(206.3, 17%, 81.6%); /* TODO: add variable to this color box-shadow */
  display: flex;
  flex-flow: column;
  min-height: 95vh;
  width: 95vw;
  @media screen and (${props => props.theme.mq.sm}) {
    ${props => props.theme.isRadious.x4}
    min-height: 90vh;
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
`
const SectionBottom = styled(_sections)`
  flex: 1;
  padding-top: 0;
  position: relative;
  @media screen and (${props => props.theme.mq.sm}) { padding-top: 0; }
  @media screen and (${props => props.theme.mq.md}) { padding-top: 0; }
  @media screen and (${props => props.theme.mq.lg}) { padding-top: 0; }
`

const Root = () => (
  <Wrapper>
    <Brand src={gradiIsotipo} />

    <Container>
      <SectionTop>
        <CurrentStateComponent />
        <HeroComponent />
      </SectionTop>
      <SectionBottom noPaddingTop>
        <SectionGridComponent/> {/* Section Grid with dynamic information */}
      </SectionBottom>
    </Container>

    <Alerts/>
  </Wrapper>
)

export default Root
