import styled from '@emotion/styled';

export const UserNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ccc;
  margin-left: auto;
`;
export const UserWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 12px;
  margin-right: 32px;

  > div {
    display: grid;
    align-items: center;
    gap: 6px;
  }
`;

export const UserName = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-right: 0.5rem;
`;
export const UserEmail = styled.p`
  font-size: 1rem;
  color: #666;
`;

export const UserAvatar = styled.div`
  width: 58px;
  height: 58px;

  background-color: #efefef;
  border-radius: 14px;
`;
export const LogOutBtn = styled.button`
  background-color: #f44336;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
`;
