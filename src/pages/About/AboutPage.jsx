import "./AboutPage.css";
import { logo } from "../../assets/img/profile.jpeg";
const AboutPage = () => {
  return (
    <>
      <div className="section about-section container animate__animated animate__fadeIn">
        <h3 className="section-title">ABOUT ME</h3>
        <div className="about-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-description">
                <p>
                  Hi! 🙋‍♂️ {"I'am"}
                  <i className="bold"> Luis Enrique Vasquez Aquila</i>
                </p>
                <p>
                  Passionate about programming 💻 and a self-taught individual
                  in constant evolution. I have had the privilege of being a
                  scholarship recipient from the
                  <i className="bold"> Gloria de Kriete Foundation </i> 🗝️ ,
                  which has been invaluable support in my university studies. My
                  focus has been on <i className="bold">&lt;programming/&gt;</i>{" "}
                  and
                  <i className="bold"> web development</i> 🌐, where I have
                  acquired robust skills and contributed to the creation of
                  impactful digital experiences. Always seeking new
                  opportunities to learn and grow in the world of technology.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-img">
                <img
                  src={logo}
                  alt=""
                  className="img-fluid rounded img-about"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
