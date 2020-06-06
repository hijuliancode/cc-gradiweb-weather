import React from 'react'
import styled from 'styled-components'
import Icon from '../shared/Icon'

// TEMP Images
import ImagePlaceA from '../../images/content/places/place-a.jpeg'
import ImagePlaceB from '../../images/content/places/place-b.jpeg'
import ImagePlaceC from '../../images/content/places/place-c.jpeg'

const Grid = styled.div`
  flex: 1;
  height: 100%;
  @media screen and (${props => props.theme.mq.md}) {
    display: grid;
    grid-gap: 30px 20px;
    grid-template-areas:
      'place_a place_b'
      'place_a place_c'
      'place_a place_c'
    ;
  }
`
const _place = styled.div`
  ${props => props.theme.isRadious.x4}
  box-shadow: 0 5px 15px hsl(206.3, 17%, 81.6%); /* TODO: add variable to this color box-shadow */
  color: ${props => props.theme.whiteColor};
  overflow: hidden;
  padding: ${props => props.theme.baseSize * 3}px;
  position: relative;
  min-height: 150px;
  &:not(:last-child) {
    margin-bottom: ${props => props.theme.baseSize * 3}px;
  }
  @media screen and (${props => props.theme.mq.md}) {
    ${props => props.theme.isRadious.x5}
    &:not(:last-child) {
      margin-bottom: 0;
    }
  }
  @media screen and (${props => props.theme.mq.lg}) {
    min-height: initial;
  }
  .place-info {
    display: flex;
    font-size: 0.7rem;
    left: ${props => props.theme.baseSize * 4}px;
    position: absolute;
    top: ${props => props.theme.baseSize * 4}px;
    z-index: 10;
    i {
      display: inline-block;
      height: 10px;
      margin-right: ${props => props.theme.baseSize * 2}px;
      margin-top: ${props => props.theme.baseSize / 2}px;
      width: 10px;
    }
    p {
      font-weight: ${props => props.theme.font.primary[400]};
      margin: 0;
    }
  }
`
const PlaceA = styled(_place)`
  grid-area: place_a;
`
const PlaceB = styled(_place)`
  grid-area: place_b;
`
const PlaceC = styled(_place)`
  grid-area: place_c;
`
const PlaceImage = styled.img`
  display: block;
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`

const Places = (props) => {
  return (
    <Grid>
      <PlaceA>
        <div className="place-info">
          <Icon pinLocation whiteColor></Icon>
          <div className="place-info__name">
            <p>Arab Street</p>
            <p>Singapore</p>
          </div>
        </div>
          <PlaceImage src={ImagePlaceA} alt="Place A" />
      </PlaceA>
      <PlaceB>
        <div className="place-info">
          <Icon pinLocation whiteColor></Icon>
          <div className="place-info__name">
            <p>Arab Street</p>
            <p>Singapore</p>
          </div>
        </div>
          <PlaceImage src={ImagePlaceB} alt="Place B" />
      </PlaceB>
      <PlaceC>
        <div className="place-info">
          <Icon pinLocation whiteColor></Icon>
          <div className="place-info__name">
            <p>Arab Street</p>
            <p>Singapore</p>
          </div>
        </div>
          <PlaceImage src={ImagePlaceC} alt="Place C" />
      </PlaceC>
    </Grid>
  )
}

export default Places
