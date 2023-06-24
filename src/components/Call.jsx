import "./styles/Call.scss";
import { Container } from "./index";
import { callBg } from "../assets";

const Call = () => {
  return (
    <div
      className="call"
      style={{
        background: `url('${callBg}') no-repeat center center/cover`,
      }}
    >
      <Container>
        <div className="content">
          <div className="text">
            <h1>Need a Fitness Trainer?</h1>
            <h2>
              <span>Call:</span> +123-456789
            </h2>
          </div>
          <a href="#">
            <span>Purchase Now</span>
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Call;
