import { Link, NavLink, useLocation } from "react-router-dom";
import Container from "components/UI/Container";
import Icon from "components/UI/Icon";
import cl from "./Header.module.scss";

const Header = function () {
  const location = useLocation();

  return (
    <header className={cl.header}>
      <Container>
        <div className={cl["header-wrapper"]}>
          <Link className={cl.logo} to="/" state={{ from: location }}>
            <Icon id="logo" />
          </Link>

          <nav className={cl.nav}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${cl.link} ${cl.active}` : cl.link
              }
              to="/catalog"
              state={{ from: location }}
            >
              Catalog
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${cl.link} ${cl.active}` : cl.link
              }
              to="/favorites"
              state={{ from: location }}
            >
              Favorites
            </NavLink>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
