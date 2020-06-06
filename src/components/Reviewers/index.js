import React from 'react'
import styled from 'styled-components'
import Icon from '../shared/Icon'

// DEMO images
import Reviewer0 from "../../images/content/reviewers/reviewer-0.jpg"
import Reviewer1 from "../../images/content/reviewers/reviewer-1.jpeg"
import Reviewer2 from "../../images/content/reviewers/reviewer-2.jpg"

const ReviewersElm =  styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  strong {
    display: inline-block;
    font-size: 0.6rem;
    font-weight: ${props => props.theme.font[100]};
    margin-right: ${props => props.theme.baseSize}px;
  }
  i {
    height: 0.8rem;
  }
`
const ReviewersList = styled.ul`
  align-items: center;
  color: red;
  display: inline-flex;
  justify-content: flex-end;
  list-style-type: none;
  margin: 0;
  padding: 0;
  li {
    ${props => props.theme.isRadious.x1}
    display: flex;
    height: 15px;
    overflow: hidden;
    width: 15px;
    &:not(:last-child) {
      margin-right: ${props => props.theme.baseSize / 2}px;
    }
    img {
      display: block;
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
    &.all-reviewers {
      align-items: center;
      background-color: ${props => props.theme.primaryColor};
      border: 0;
      color: ${props => props.theme.whiteColor};
      display: flex;
      font-size: 0.5rem;
      justify-content: center;
      margin: 0;
      padding: ${props => props.theme.baseSize / 2};
    }
  }
`

const Reviewers = (props) => {
  return (
    <ReviewersElm>
      <Icon iconReviewers primaryColor/>
      <strong>Top Reviewers</strong>
      <ReviewersList>
        <li> <img src={Reviewer0} alt="Reviewer 0" /> </li>
        <li> <img src={Reviewer1} alt="Reviewer 1" /> </li>
        <li> <img src={Reviewer2} alt="Reviewer 2" /> </li>
        <li className="all-reviewers">8+</li>
      </ReviewersList>
    </ReviewersElm>
  )
}

export default Reviewers
