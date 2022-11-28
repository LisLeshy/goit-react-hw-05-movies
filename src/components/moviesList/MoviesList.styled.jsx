import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
 max-width: 1200px;
  width: 100%;
  fontSize: 40;
  color: '#010101';
  margin: 0 auto;
  padding: 0 30px;

`;


export const IMG = styled.img`

  width: 280px;
`;

export const ListLink = styled(NavLink)`
  text-decoration: none;
  color: #2e2e2e;
`;
export const ImgList = styled.img`
margin-top: 30px;
  display: block;
  width:100%;
  height: 85%;
  border-radius: 10px;
  box-shadow: 0px 0px 05px 0px rgba(0, 0, 0, 1);
  
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
export const Ul = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 70px;
`;
