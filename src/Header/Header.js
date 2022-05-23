import { NavLink } from "react-router-dom";
import "./assets/scss/header.css";
function Header() {
  return (
    <>
      <header className="App-header">
        <div>LOGO</div>
        <nav>
          <NavLink
            to="home"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="tasks"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            Tasks
          </NavLink>
          <NavLink
            to="login"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            Login
          </NavLink>
          <NavLink
            to="register"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            Register
          </NavLink>
        </nav>
      </header>
    </>
  );
}
export default Header;
