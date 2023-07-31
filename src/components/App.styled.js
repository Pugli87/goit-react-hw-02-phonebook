import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: 15px;
`;

export const Title = styled.h1`
  margin-top: 20px;
  text-transform: capitalize;
`;

export const Heading2 = styled.h2`
  display: block;
  text-transform: capitalize;
`;

export const Text = styled.h3`
  &::first-letter {
    text-transform: uppercase;
  }
`;
