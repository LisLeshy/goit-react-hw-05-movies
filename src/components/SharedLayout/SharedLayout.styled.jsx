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
export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 15px 10px;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
  border-bottom: 2px solid blue;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`;