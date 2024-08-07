import "./Header.scss";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "../../context/AuthContext";

function Header({ links }) {
  const { auth } = useAuth();

  return (
    <header>
      <nav role="navigation">
        <ul>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={link.className}>
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to={auth ? `/profile/${auth.id}` : "/login"}
              className="nav-link account"
            >
              Account
            </NavLink>
          </li>
        </ul>
      </nav>
      <span className="nav-dreamshare">DreamShare</span>
    </header>
  );
}

Header.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      className: PropTypes.string,
    })
  ).isRequired,
};

export default Header;
