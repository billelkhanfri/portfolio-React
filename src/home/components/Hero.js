import React from "react";
import Container from "../../common/components/Container";
import Billel from "../../images/Billel-profile-picture.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <Container>
      <div className="skewed">
        <div className="text">
          <div className="intro">
            <h3>Salut, je suis</h3>
            <h1> Billel KHANFRI</h1>
            <p> Développeur Frontend / Concepteur Designer UI</p>
            <div className="icons">
              <a href="https://github.com/billelkhanfri">
                <FaGithub className="icon github" />
              </a>
              <a href="https://www.linkedin.com/in/billel-khanfri-ab99b3b9">
                <FaLinkedin className="icon linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div className="image">
          <div className="text-img">
            <h2>
              &lt;&gt; <br /> Bringing Designs to life <br />
              &lt;/&gt;
            </h2>
          </div>

          <img src={Billel} alt=" person with glasses" />
        </div>
      </div>
    </Container>
  );
}

export default Hero;
