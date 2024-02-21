import styled from '@emotion/styled';

export const AddUserIcon = styled.div`
  width: 20px;
  height: 20px;

  fill: #fabb18;
`;
export const ContentPageContainer = styled.div`
  padding: 38px 48px;
  height: 100vh;

  border-radius: 32px 32px 0 0;
  background-color: #f9f9f9;
`;
export const ContactNavWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 28px;
`;
export const Title = styled.h2`
  font-weight: 700;
  font-size: 34px;

  margin: 0;
`;

export const FilterWrapper = styled.div`
  display: flex;
  margin-left: auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 30px;
  width: 65%;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 18px;
  div {
    padding: 8px;
    background-color: #ffc4c4;
    width: 288px;
    font-size: 14px;
    &::first-letter {
      text-transform: uppercase;
    }
  }
`;

export const Input = styled.input`
  width: 300px;
  height: 40px;
  font-size: 16px;
  &::placeholder {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;
  transform: scale(1);
  font-size: 16px;
  transition: transform 250ms ease-out, background-color 250ms ease-out;
  &:hover,
  &:focus-visible {
    transform: scale(1.1);
  }
`;
