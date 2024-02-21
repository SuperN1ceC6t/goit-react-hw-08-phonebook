import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  align-content: center;
  justify-content: center;
  max-width: 250px;
  margin: 0 auto;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  margin-top: 0.3rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-left: 20px;
  display: flex;
  align-content: center;
  justify-content: center;
`;

export const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: #f44336;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
`;
