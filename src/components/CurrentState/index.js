import React from 'react'
import styled from 'styled-components'

const CurrentState = styled.div`
  display: none;
`

const CurrentStateComponent = (props) => {
  return (
    <CurrentState>
      <p>CurrentStateComponent</p>
    </CurrentState>
  )
}

export default CurrentStateComponent
