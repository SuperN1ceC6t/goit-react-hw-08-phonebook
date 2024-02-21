import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Form = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  color: #fff;
  background-color: #f44336;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
`;

export const LoggedLink = styled(NavLink)`
  display: block;
  text-align: center;
  text-decoration: none;
  color: #f44336;
  margin-top: 1rem;
`;
