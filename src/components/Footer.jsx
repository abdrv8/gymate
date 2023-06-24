import "./styles/Footer.scss";
import { Container } from "./index";
import { logoBlack } from "../assets";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="content">
          <div className="left">
            <img src={logoBlack} alt="logo black" />
            <div className="desc">
              Take your health and body to the next level with our comprehensive
              program designed to help you reach your fitness goals.
            </div>
            <div className="icons">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-pinterest-p"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
            <div className="copyright">
              <p>Privacy Policy | &copy; {new Date().getFullYear()}, Gymate</p>
              <p className="dev">
                Built by:{" "}
                <a
                  href="https://razaq.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Razaq
                </a>
              </p>
            </div>
          </div>
          <div className="center">
            <div className="title">
              <h2>Our Classes</h2>
              <div className="line"></div>
            </div>
            <ul>
              <a href="#">
                <li>Fitness Classes</li>
              </a>
              <a href="#">
                <li>Aerobics Classes</li>
              </a>
              <a href="#">
                <li>Power Yoga</li>
              </a>
              <a href="#">
                <li>Learn Machines</li>
              </a>
              <a href="#">
                <li>Full-body Strength</li>
              </a>
            </ul>
          </div>
          <div className="right">
            <div className="title">
              <h2>Working Hours</h2>
              <div className="line"></div>
            </div>
            <ul>
              <li>
                <b>Monday - Friday:</b>
              </li>
              <li>7:00am - 21:00pm</li>
              <li>
                <b>Saturday:</b>
              </li>
              <li>7:00am - 19:00pm</li>
              <li>
                <b>Sunday - Closed</b>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
