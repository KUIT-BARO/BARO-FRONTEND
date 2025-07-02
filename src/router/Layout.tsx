import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loading from '@shared/components/loading/Loading';

const Layout = () => {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default Layout;
