import styled from 'styled-components';

export const ContactItems = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: space-between;
`;

export const ContactName = styled.span`
  margin-right: 10px;
`;

export const ContactNumber = styled.span`
  /* flex: 1; */
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 3px 8px;
  font-size: 1 rem;
  margin-left: 20px;
  border: none;
  border-radius: 6px;
  text-transform: capitalize;
  &:hover {
    background-color: rgb(61, 129, 200);
  }
`;

export const Ul = styled.ul`
  list-style-type: circle;
`;
