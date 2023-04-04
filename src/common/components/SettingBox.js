import React from "react";
import "../styles/common.scss";
import { BsFillHouseGearFill } from "react-icons/bs";
import Collapse from "./Collapse";
import { useState } from "react";
import ColorsContent from "./ColorsContent";

function SettingBox() {
  const [toggle, setToggle] = useState(false);
    const [primaryColor, setPrimaryColor] = useState("#ff9800");


  return (
    <>
      <div className="toggle-settings" onClick={() => setToggle(!toggle)}>
        <BsFillHouseGearFill
          className="gear"
          onClick={() => setToggle(!toggle)}
        />
      </div>
      {toggle && (
        <div className="settings-box">
          <div className="settings-container">
            <Collapse title="Couleurs">
              {" "}
              {<ColorsContent setPrimaryColor={setPrimaryColor} />}
            </Collapse>
            <Collapse title="backgrounds"> </Collapse>
          </div>
        </div>
      )}
    </>
  );
}

export default SettingBox;
