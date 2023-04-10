import React from "react";
import "../styles/about.scss";

function Education(props) {
  return (
    <>
      <div className="containers">
        <h2 className={`about-title ${props.title}`}> Education</h2>
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
                <h4 className="rectangle-title">{props.contentTitle}</h4>
                {props.rightContent}
                <div className="triangle-right"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
