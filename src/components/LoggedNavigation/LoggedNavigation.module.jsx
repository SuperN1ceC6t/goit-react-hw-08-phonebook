import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LoggedList = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
export const LoggedItem = styled.li`
  margin-right: 1rem;
`;
export const LoggedLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  transition: background-color 0.3s, color 0.3s;
`;
