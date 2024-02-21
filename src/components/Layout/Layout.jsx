import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../Header/Header';

const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
