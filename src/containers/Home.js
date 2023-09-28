import "./Home.css";
import rectangle from "../asserts/Rectangle 2.svg";
import left from "../asserts/🦆 icon _arrow left_.svg";
import right from "../asserts/🦆 icon _arrow left_ (1).svg";

const Home = () => {
  return (
    <div className="home">
      <img src={rectangle} alt="" />
      <h1 className="realiable-mining">
        Realiable mining support <br /> services with
        <strong>
          Toyomo <br /> Industrial Supplies
        </strong>
        Ghana <br /> limited
      </h1>
      <div className="Toyo">
        Toyomo Industrial Supplies (GH) Limited (TISL) is a limited liability
        company that started operations in 2007. TISL for short is a wholly
        owned Ghanaian company operating from Sekondi - Takoradi in the capital
        city of Western region
      </div>
      <span> Learn More</span>

      <svg
        className="left"
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="26"
        viewBox="0 0 42 26"
        fill="none"
      >
        <path
          d="M15.5682 2L2 13.075L15.5682 24.15"
          stroke="white"
          stroke-width="3"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M40 13.0752H2.3801"
          stroke="white"
          stroke-width="3"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <svg
        className="right"
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="26"
        viewBox="0 0 42 26"
        fill="none"
      >
        <path
          d="M26.4318 2L40 13.075L26.4318 24.15"
          stroke="white"
          stroke-width="3"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1.99999 13.0752H39.6199"
          stroke="white"
          stroke-width="3"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default Home;
