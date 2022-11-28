import styled from 'styled-components';




export const Li = styled.li`


  transition-property: scale;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition: all 1s ease-out;

  cursor: pointer;
  &:hover {
    scale: 1.15;
  }`;