import styled from 'styled-components';

export const Input = styled.input`
  outline: 0;
  border: none;
  padding: 5px;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0 1px 6px 0 #20212447;
  &:focus {
    box-shadow: 0 1px 6px 0 rgb(61, 129, 200);
    border: 1px solid rgb(61, 129, 200);
  }
`;
