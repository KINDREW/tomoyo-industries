import "./why.css";
import tree from "../asserts/🦆 icon _tree_.svg";
import padlock from "../asserts/🦆 icon _security safe_.svg";
import quality from "../asserts/🦆 icon _favorite chart_.svg";
import { useState } from "react";

const Why = () => {
  const [enviroClass, setEnviroClass] = useState("dot rightt");
  const [safeClass, setSafeClass] = useState("dot center active");
  const [qualClass, setQualClass] = useState("dot leftt");
  const [leftColour, setLeftColour] = useState("#D9D9D9");
  const [centerColour, setCenterColour] = useState("#00C714");
  const [rightColour, setRightColour] = useState("#D9D9D9");

  const handleClick1 = () => {
    setEnviroClass("dot rightt active");
    setSafeClass("dot center");
    setQualClass("dot leftt");
    setLeftColour("#00C714");
    setCenterColour("#D9D9D9");
    setRightColour("#D9D9D9");
  };
  const handleClick2 = () => {
    setEnviroClass("dot rightt");
    setSafeClass("dot center active");
    setQualClass("dot leftt");
    setCenterColour("#00C714");
    setLeftColour("#D9D9D9");
    setRightColour("#D9D9D9");
  };
  const handleClick3 = () => {
    setEnviroClass("dot rightt");
    setSafeClass("dot center");
    setQualClass("dot leftt active");
    setRightColour("#00C714");
    setLeftColour("#D9D9D9");
    setCenterColour("#D9D9D9");
  };

  return (
    <div className="why">
      <div className="whyUs">
        <div className="whyChoose">Why Choose us:</div>
        <div className="ashDot">
          <svg
            onClick={handleClick1}
            className="ash1"
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
          >
            <circle cx="18.5" cy="18.5" r="10.5" fill={leftColour} />
            <circle cx="18.5" cy="18.5" r="18" stroke={leftColour} />
          </svg>
          <div className="line"></div>
          <svg
            onClick={handleClick2}
            className="active"
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
          >
            <circle cx="18.5" cy="18.5" r="10.5" fill={centerColour} />
            <circle cx="18.5" cy="18.5" r="18" stroke={centerColour} />
          </svg>
          <div className="line"></div>
          <svg
            onClick={handleClick3}
            className="ash2"
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
          >
            <circle cx="18.5" cy="18.5" r="10.5" fill={rightColour} />
            <circle cx="18.5" cy="18.5" r="18" stroke={rightColour} />
          </svg>
        </div>
        <div className="greenDot">
          <div className={enviroClass} onClick={handleClick1}>
            <img src={tree} alt="" />
            <p>
              <h2>Environmental Policy</h2>
              We are committed to minimizing our environmental impact and
              promoting sustainability
            </p>
            <button>Learn more</button>
          </div>
          <div className={safeClass} onClick={handleClick2}>
            <img src={padlock} alt="" />
            <p>
              <h2>Safety Policy</h2>
              Our company prioritizes the safety and well-being of all
              employees, contractors, and stakeholders.
            </p>
            <button>Learn more</button>
          </div>
          <div className={qualClass} onClick={handleClick3}>
            <img src={quality} alt="" />
            <p>
              <h2> Quality Assurance Policy</h2>
              We maintain a rigorous quality assurance policy to ensure that all
              our projects meet the highest quality standards.
            </p>
            <button>Learn more</button>
          </div>
        </div>
      </div>
      <div className="from">
        <h2 className="cus">From our custumers:</h2>
        <div className="oliv">
          <div>
            <p>
              I had a great experience with Toyomo Industrial Supplies Ghana
              Limited. Their mining support services were top-notch and their
              team was incredibly helpful and knowledgeable. Thank you for
              making our mining operation run smoothly!
              <span className="colon">“</span>
            </p>
            <h2>Olivia Smith</h2>
          </div>
          <div>
            <p>
              I had a great experience with Toyomo Industrial Supplies Ghana
              Limited. Their mining support services were top-notch and their
              team was incredibly helpful and knowledgeable. Thank you for
              making our mining operation run smoothly!
              <span className="colon">“</span>
            </p>
            <h2>Olivia Smith</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
