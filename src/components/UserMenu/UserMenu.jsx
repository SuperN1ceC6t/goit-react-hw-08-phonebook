import { useDispatch } from 'react-redux';
import {
  LogOutBtn,
  UserEmail,
  UserName,
  UserNavigation,
  UserWrapper,
} from './UserMenu.module';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserNavigation>
      <UserWrapper>
        <div>
          <UserName>{user.name}</UserName>
          <UserEmail>{user.email}</UserEmail>
        </div>
      </UserWrapper>
      <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </LogOutBtn>
    </UserNavigation>
  );
};

export default UserMenu;
