import React from 'react'
import gradiIsotipo from './images/design/misc/gradiweb-isotipo.png'
import styled from 'styled-components'

const Alerts = styled.div`
  display: none;
`
const Wraper = styled.div`
  height: 100%;
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
const Root = () => (
  <Wraper>
    <Brand src={gradiIsotipo} />
    <Alerts/>
  </Wraper>
)

export default Root
