import React from 'react'
import styled from 'styled-components'
import Icon from '../shared/Icon'

import Skeleton from '../shared/skeleton'

// TEMP Images
import ImagePlaceA from '../../images/content/places/place-a.jpeg'
import ImagePlaceB from '../../images/content/places/place-b.jpeg'
import ImagePlaceC from '../../images/content/places/place-c.jpeg'

const Grid = styled.div`
  flex: 1;
  @media screen and (${props => props.theme.mq.lg}) {
    align-items: flex-start;
    display: grid;
    grid-gap: 20px 30px;
    grid-template-areas:
      'place_a place_b'
      'place_a place_c'
    ;
  }
`
const _place = styled.div`
  ${props => props.theme.isRadious.x3}
  box-shadow: 0 5px 15px hsl(206.3, 17%, 81.6%); /* TODO: add variable to this color box-shadow */
  color: ${props => props.theme.whiteColor};
  overflow: hidden;
  padding: ${props => props.theme.baseSize * 3}px;
  position: relative;
  &:hover {
    cursor: pointer;
    &:before {
      opacity: 1;
    }
  }
  &:after {
    background-color: rgba(0, 0, 0, 0.2);
    content: "";
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
  &:before {
    ${props => props.theme.isRadious.x6}
    align-items: center;
    background-color: rgb(125, 103, 240, 0.8);
    color: white;
    content: "+";
    display: flex;
    font-size: 1.3rem;
    height: 100%;
    justify-content: center;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: all ease-in-out 0.2s;
    width: 45px;
    z-index: 15;
  }
  &:not(:last-child) {
    margin-bottom: ${props => props.theme.baseSize * 3}px;
  }
  @media screen and (${props => props.theme.mq.md}) {
    ${props => props.theme.isRadious.x5}
  }
  @media screen and (${props => props.theme.mq.lg}) {
    &:not(:last-child) {
      margin-bottom: 0;
    }
    min-height: initial;
  }
  .place-info {
    display: flex;
    font-size: 0.7rem;
    position: absolute;
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
  a {
    color: inherit;
  }
`
const PlaceA = styled(_place)`
  grid-area: place_a;
  height: 120px;
  @media screen and (${props => props.theme.mq.lg}) {
    height: 160px;
  }
`
const PlaceB = styled(_place)`
  grid-area: place_b;
  height: 100px;
  @media screen and (${props => props.theme.mq.lg}) {
    height: 45px;
  }
`
const PlaceC = styled(_place)`
  grid-area: place_c;
  height: 100px;
  @media screen and (${props => props.theme.mq.lg}) {
    height: 90px;
  }
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

const Places = ({loading}) => {
  return (
    <Grid>
      <PlaceA>
        {loading && <Skeleton />}
        {!loading &&
          <a href="https://fr.wikipedia.org/wiki/Arc_de_triomphe_de_l%27%C3%89toile" target="_blank" rel="noopener noreferrer">
            <div className="place-info">
              <Icon pinLocation whiteColor></Icon>
              <div className="place-info__name">
                <p><strong>L'Arc de Triomphe de l'Etoile</strong></p>
                <p>Paris, France</p>
              </div>
            </div>
            <PlaceImage src={ImagePlaceA} alt="Place A" />
          </a>
        }
      </PlaceA>
      <PlaceB>
        {loading && <Skeleton />}
        {!loading &&
        <a href="https://en.wikipedia.org/wiki/Vianden" target="_blank" rel="noopener noreferrer">
            <div className="place-info">
              <Icon pinLocation whiteColor></Icon>
              <div className="place-info__name">
                <p>Vianden</p>
                <p>Luxembourg</p>
              </div>
            </div>
            <PlaceImage src={ImagePlaceB} alt="Place B" />
          </a>
        }
      </PlaceB>
      <PlaceC>
        {loading && <Skeleton />}
        {!loading &&
          <a href="https://en.wikipedia.org/wiki/G%C3%B6reme" target="_blank" rel="noopener noreferrer">
            <div className="place-info">
              <Icon pinLocation whiteColor></Icon>
              <div className="place-info__name">
                <p>Göreme</p>
                <p>Turkey</p>
              </div>
            </div>
            <PlaceImage src={ImagePlaceC} alt="Place C" />
          </a>
        }
      </PlaceC>
    </Grid>
  )
}

export default Places
