import React from "react";
import "../styles/about.scss";

function Education(props) {
  return (
    <>
      {" "}
      <div>
        <div className="containers">
          <h3 className=" years">{props.year} </h3>
          <div className="education-content">
            <div className="left">
              <div className="rectangle-content">
                <h4 className="rectangle-title">{props.contentTitle}</h4>
                {props.leftContent}
                <div className="triangle-left"></div>
              </div>
            </div>
            <div className="clearfix">
              {" "}
              <div className={`right ${props.class}`}>
                <div className="rectangle-content-right">
                  <h4 className="rectangle-title">{props.contentTitleLeft}</h4>
                  {props.rightContent}
                  <div className="triangle-right"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
/*<Education
        year="2023"
        leftContent="projets réalisés:

Transformation de maquette en site web avec HTML CSS
Dynamisation d'une page web avec des animations css
Optimisation d'u site web existant (SEO)
Construction d'un site e-commerce en JavaScript
Construction d'une API sécurisée pour une application d'avis gastronomiques
Création d'une application web de location immobilière avec React"
        rightContent="projet réalisé:
Création des prototypes High Fidelity et low Fidelity
Création de User Journey et Journey map
Creation du design system
Création d'une page vitrine statique avec HTML CSS"
        contentTitle="Openclassrooms | Développeur web"
        contentTitleLeft="POP School | Concepteur Designer UI"
      />
      <Education
        leftContent="hello"
        rightContent="projet réalisé:
        
Création des prototypes High Fidelity et low Fidelity
Création de User Journey et Journey map
Creation du design system
Création d'une page vitrine statique avec HTML CSS"
        year="2022"
        title="title"
        contentTitle="POP School | Concepteur Designer UI"
      />*/
