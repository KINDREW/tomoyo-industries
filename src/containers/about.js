import "./about.css";
import tractor from "../asserts/excavator-png-30147 1.png";

const About = () => {
  return (
    <div className="about">
      <div className="the-company">
        <div className="writing">
          <h1>the company</h1>
          <p>
            Toyomo Industrial Supplies Ghana Limited is a reputable company
            specializing in providing exceptional mining support services. Our
            company is located in the Effia Kwesimintsim Municipal of the
            Western Region, we are dedicated to delivering high-quality products
            and services to meet the unique needs of our clients in the mining
            industry. We have a strong commitment to excellence, striving to be
            the preferred partner for all mining support requirements, offering
            reliable solutions and superior customer service.
          </p>
        </div>
        <div className="tractor">
          <img src={tractor} alt="" />
        </div>
        <div className="writing-2">
          The target market is all operating mining companies, mining
          exploration companies, and industrial plants in Ghana. The business
          offering for this market is to strive to achieve three A's notably
          Agility, Ability, and Adaptability. The provision of these three A's
          by Toyomo Industrial Supplies (Gh) Ltd will lead to sustainable growth
          and efficiency of the supply of spares and consumables. Toyomo
          Industrial Supplies (Gh) Limited is owner managed and the Managing
          Director has several years of experience in procurement and therefore
          understands the mindset of the buyer.
        </div>
      </div>
      <div className="bonita">
        <p>
          Our Principals have relationships with Engineers, Manufacturers, OEMs,
          Suppliers, Fabricators, and Stock lists and it is these relationships
          that have enabled us to provide our clients with what they require.
          Our Principals have long-established working relationships with
          manufacturers such as Metso Minerals, Weir Envirotech, Warman, SKF,
          Timken, FAG, Siemens, SEW, Bonfiglioli, Nordbak, Linatex, Multotec,
          Fuchs Lubricants, Lightin, Mixtec, WEG, Chesterton, Denver, ESCO,
          Telemacanique, Rema Tip-Top, Blackwoods, Linatco, Grundfos, Ramsey,
          Labtech ESSA, Yokogawa, Enerpac, Flygt, etc.
        </p>
      </div>
    </div>
  );
};

export default About;
