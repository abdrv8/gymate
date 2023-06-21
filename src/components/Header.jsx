import "./styles/Header.scss";
import { logoWhite } from "../assets";
import { navLinks } from "../constants";

const Header = () => {
  return (
    <header className="header">
      <div className="left">
        <a href="/">
          <img src={logoWhite} alt="logo" />
        </a>
      </div>
      <nav className="center">
        {navLinks.map((link) => (
          // TODO: href={`/${link.id}`}. Use Link tag from react-router-dom
          <a href="#" key={link.id}>
            {link.title}
          </a>
        ))}
      </nav>
      <div className="right">
        <i className="fa-regular fa-user"></i>
        <i className="fa-regular fa-chart-bar"></i>
        <div className="join-class">
          <i className="fa-solid fa-plus"></i>
          <span>Join class now</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
