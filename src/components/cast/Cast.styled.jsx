import styled from 'styled-components';


export const Ul = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 70px;
`;
export const IMG = styled.img`
//   display: block;
  width: 250px;
`;
export const Li = styled.li`
  border-radius: 5px;

  transition-property: scale;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition: all 1s ease-out;

  cursor: pointer;
  &:hover {
    scale: 1.05;
  }
  
`;
