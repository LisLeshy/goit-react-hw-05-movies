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
export const Button = styled.button`
  
  border-radius: 4px;
  border: none;
   padding: 8px 12px;
  margin-right: 15px;
  color: blue;
  text-decoration: none;
  border-radius: 4px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  &:hover {
    color: #3a7223;
    background: #fff033;
  }

`;
export const BorderBox = styled.div`
  border-bottom: 2px solid blue;
`;
export const FlexBox = styled.div`
  display: flex;
  padding: 10px 0;
`;
export const Box = styled.div`
  padding: 5px 20px;
`;

export const IMG = styled.img`

  width: 280px;
`;
export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 70px;

`;
export const Link = styled(NavLink)`
  padding: 8px 12px;
  margin-right: 15px;
  color: blue;
  text-decoration: none;
  border-radius: 4px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  &:hover {
    color: #3a7223;
  }
  &.active {
    background: #fff033;
  }

`;
