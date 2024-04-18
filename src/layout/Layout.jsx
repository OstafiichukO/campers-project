import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Header from '../components/Header';
import Container from '../components/UI/Container';

const Layout = function () {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Suspense fallback={<div>Loading content...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default Layout;
