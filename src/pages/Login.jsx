import "./styles/Login.scss";
import { Banner } from "../components";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Banner title={"Sign In"} />
      <div className="wrapper">
        <div className="form">
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="btn">Sign Up</div>
          <div className="text">
            <p>New to Gymate?</p>
            <Link to="/signup">
              <span>Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
