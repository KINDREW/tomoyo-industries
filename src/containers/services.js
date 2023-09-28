import warehouse from "../asserts/Rectangle 13.png";
import transport from "../asserts/Rectangle 13 (2).png";
import Representations from "../asserts/Rectangle 13 (1).png";
import "./services.css";

const Services = () => {
  return (
    <div className="services">
      <div className="our">
        <h1>Our Services</h1>
        <div className="our-2 ">
          <div>
            <img src={warehouse} alt="" />
            <h2>Warehousing</h2>
            <p>
              We offer warehousing services for all mining goods, ensuring
              maximum efficiency and longevity such as shown in the picture by
              keeping hydrogen peroxide safely stored in our warehouse. Some of
              the other goods we also store are Steel Balls, Spiltset, SIBX,
              Caustic soda Copper sulphate, and other mining chemicals.{" "}
            </p>
          </div>
          <div>
            <img src={transport} alt="" />
            <h2>Transportation Services</h2>
            <p>
              Our transport services include the safe transportation of heavy
              goods supplied, to and fro the mining sites with the help of our
              sister company ABK Logistics.
            </p>
          </div>
          <div>
            <img src={Representations} alt="" />
            <h2>Representations</h2>
            <p>
              We are currently representative partners to the following
              international companies;GoldPro New Technology and Materials Co.
              Ltd, a Chinese company that manufactures Forged Balls, Cast Iron
              Balls and Mill Liners.Jacobi Pica Carbons, based in France but
              with a production facilities in Asia and China. They manufacture
              Activated Carbon.Coin De Mire Export CC, a South African based
              company that is a buying house for Industrial Plant Spares and
              ground support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
