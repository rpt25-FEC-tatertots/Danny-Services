import React from 'react';
//import styled from 'styled-components';

const TitleContainer = window.styled.div`
display: flex;
justify-content: center;
padding: 2rem 0 0 0;
`
const TitleBox = window.styled.h1`
font-size: 2.7em;
flex-shrink: 0;
width: 33%;
max-width: 48rem;

text-align: center;
@media (max-width: 768px) {
  font-size: 2.5rem;
}
`;
const Title = (props) => (
  <TitleContainer>
    <TitleBox>{props.title}</TitleBox>
  </TitleContainer>
  )


export default Title