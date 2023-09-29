import "./team.css";
import rectangle from "../asserts/Rectangle 20.png";
import rectangle1 from "../asserts/Rectangle 21.png";

const Team = () => {
  return (
    <div className="team">
      <h1 className="meat">The Team</h1>
      <div className="theTeam">
        <div>
          <img src={rectangle} alt="" />
          <p>
            <h2>Managing Director</h2>
            <h1>Jon Doe</h1>
            <h2
              style={{
                textDecoration: "underline",
              }}
            >
              (jondoe@toyomo.com)
            </h2>
          </p>
        </div>
        <div>
          <img src={rectangle1} alt="" />
          <p>
            <h2>Managing Director</h2>
            <h1>Jon Doe</h1>
            <h2
              style={{
                textDecoration: "underline",
              }}
            >
              (jondoe@toyomo.com)
            </h2>
          </p>
        </div>
        <div>
          <img src={rectangle} alt="" />
          <p>
            <h2>Managing Director</h2>
            <h1>Jon Doe</h1>
            <h2
              style={{
                textDecoration: "underline",
              }}
            >
              (jondoe@toyomo.com)
            </h2>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
