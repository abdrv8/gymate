import "./styles/Signup.scss";
import { Banner } from "../components";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <Banner title={"Sign Up"} />
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
            <p>Already have account?</p>
            <Link to="/login">
              <span>Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
