import { useState } from "react";

import "./styles/BmiCalc.scss";
import { Container } from "./index";
import { bmiBg } from "../assets";

const BmiCalc = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const calcBmi = () => {
    if (weight == 0 || height == 0) {
      alert("Enter a valid value");
    } else {
      if (weight === 0 || height === 0) {
        alert("Please enter a valid weight and height");
      } else {
        let bmi = weight / ((height * height) / 10000);
        setBmi(bmi.toFixed(1));

        // logic for message
        if (bmi < 20) {
          setMessage("Underweight");
        } else if (bmi >= 20 && bmi < 27) {
          setMessage("Normal");
        } else {
          setMessage("Overweight");
        }
      }
    }
  };

  return (
    <div
      className="bmicalc"
      style={{
        background: `url('${bmiBg}') no-repeat center center/cover`,
      }}
    >
      <Container>
        <div className="content">
          <div className="heading">
            <h1>
              Let's Calculate Your <span>BMI</span>
            </h1>
            <p>
              Easily determine your body mass index with our accurate
              calculation tool.
            </p>
          </div>
          <div className="inputs">
            <input
              type="text"
              placeholder="Weight (kg)"
              onChange={(e) => setWeight(e.target.value)}
            />
            <input
              type="text"
              placeholder="Height (cm)"
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="result">
            <div className="bmi">
              Your BMI is: <span>{bmi}</span>
            </div>
            <div className="weight">
              Your weight is: <span>{message}</span>
            </div>
          </div>
          <a onClick={calcBmi}>
            <span>Calculate</span>
          </a>
        </div>
      </Container>
    </div>
  );
};

export default BmiCalc;
