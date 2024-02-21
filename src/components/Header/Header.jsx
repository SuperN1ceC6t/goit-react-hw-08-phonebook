import { useAuth } from 'hooks/useAuth';

import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import LoggedNav from 'components/LoggedNavigation/LoggedNavigation';

import { Header } from './Header.module';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <LoggedNav />}
    </Header>
  );
};

export default AppBar;
