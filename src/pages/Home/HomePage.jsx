import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <section className="section home-section animate__animated animate__fadeIn">
        <div className="particles" id="particles-js"></div>
        <div className="container">
          <h3 className="home-title">Welcome to my digital world!</h3>
          <h4 className="home-subtitle">
            Turn ideas into reality and craft unique experiences
          </h4>
          <Link to={"/AboutMe"} className="btn bg-dark">
            About me
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
