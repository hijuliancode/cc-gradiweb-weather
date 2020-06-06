import React from 'react'
import styled from 'styled-components'

const CurrentState = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 15;
  left: 0;
`

const CurrentStateComponent = (props) => {
  return (
    <CurrentState>
      <p>CurrentStateComponent</p>
    </CurrentState>
  )
}

export default CurrentStateComponent
