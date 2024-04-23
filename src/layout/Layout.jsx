import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import Header from "../components/Header";
import Container from "../components/UI/Container";
import Loader from "components/UI/Loader";

const Layout = function () {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default Layout;
