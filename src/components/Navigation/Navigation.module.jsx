import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Logo = styled(NavLink)`
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  color: #333;
  > span {
    color: #f44336;
  }
  :hover {
    color: #f44336;
    > span {
      color: #000000;
  }
`;

export const MainNav = styled.nav`
  display: flex;
  align-items: center;
  margin-left: auto;
`;
export const MainNavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
export const MainNavItem = styled.li`
  margin-right: 1rem;
`;
export const MainNavLink = styled(NavLink)`
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  color: #333;
  :hover {
    color: #f44336;
  }
`;
