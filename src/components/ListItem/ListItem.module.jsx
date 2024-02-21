import styled from '@emotion/styled';

export const UserIcon = styled.div`
  padding: 8px;

  width: 20px;
  height: 20px;

  fill: #fabb18;

  border-radius: 12px;

  background-color: rgba(250, 187, 24, 0.1);
`;

export const PhoneIcon = styled.div`
  padding: 8px;

  width: 20px;
  height: 20px;

  fill: #fabb18;

  border-radius: 12px;

  background-color: rgba(250, 187, 24, 0.1);
`;

export const UserDeletedIcon = styled.div`
  width: 20px;
  height: 20px;

  fill: #fabb18;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  height: 40px;
  padding: 5px;
  font-size: 16px;
  background-color: white;
`;

export const ContactName = styled.p`
  display: flex;
  align-items: center;
  gap: 14px;

  margin: 0;
  font-weight: 500;
`;

export const ContactNumber = styled.p`
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 0;
`;

export const Button = styled.button`
  background-color: #f44336;
  color: white;
  padding: 5;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
`;
