import "./styles/Header.scss";
import { logoWhite } from "../assets";
import { navLinks } from "../constants";

const Header = () => {
  const handleAbout = () => {
    let aboutEl = document.querySelector(".about");
    aboutEl.classList.toggle("active");
  };

  const toggleMobileMenu = () => {
    let centerEl = document.querySelector(".center");
    centerEl.classList.toggle("active");
  };

  const closeMobileMenu = () => {
    let centerEl = document.querySelector(".center");
    centerEl.classList.remove("active");
  };

  return (
    <header className="header">
      <div className="left">
        <a href="/">
          <img src={logoWhite} alt="logo" />
        </a>
      </div>
      <nav className="center">
        <i
          className="fa-solid fa-xmark closeBtn"
          style={{ display: "none" }}
          onClick={closeMobileMenu}
        ></i>
        {navLinks.map((link) => (
          // TODO: href={`/${link.id}`}. Use Link tag from react-router-dom
          <a href="#" key={link.id} onClick={closeMobileMenu}>
            {link.title}
          </a>
        ))}
      </nav>
      <div className="right">
        <i
          className="fa-solid fa-bars menuBtn"
          style={{ display: "none" }}
          onClick={toggleMobileMenu}
        ></i>
        <i className="fa-regular fa-user"></i>
        <i className="fa-regular fa-chart-bar" onClick={handleAbout}></i>
        <div className="join-class">
          <i className="fa-solid fa-plus"></i>
          <span>Join class now</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
