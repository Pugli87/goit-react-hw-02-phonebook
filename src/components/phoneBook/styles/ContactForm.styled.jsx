import styled from 'styled-components';

export const Form = styled.form`
  width: 60vw;
  border: 1px solid black;
  padding: 15px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  text-transform: capitalize;
`;

export const Input = styled.input`
  width: 40vw;
  padding: 5px;
  margin-bottom: 30px;
  border-radius: 6px;
  border: none;
  outline: 0;
  background-color: transparent;
  box-shadow: 0 1px 6px 0 #20212447;

  &:focus {
    box-shadow: 0 1px 6px 0 rgb(61, 129, 200);
    border: 1px solid rgb(61, 129, 200);
  }
`;

export const Button = styled.button`
  width: 30vw;
  background-color: transparent;
  border: none;
  padding: 3px;
  font-size: 1 rem;
  border-radius: 6px;
  text-transform: capitalize;
  box-shadow: 0 0 5px gray;
  &:hover {
    box-shadow: 0 1px 6px 0 rgb(61, 129, 200);
    outline: 1px solid rgb(61, 129, 200);
  }
  &:focus {
    box-shadow: 0 1px 6px 0 rgb(61, 129, 200);
    outline: 1px solid rgb(61, 129, 200);
  }
`;

export const Text = styled.h3`
  margin: 0;
  font-weight: 400;
  /* padding: 10px 20px; */
  margin-bottom: 10px;
`;
