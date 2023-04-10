import React from "react";
import "../styles/common.scss";
import { BsFillHouseGearFill } from "react-icons/bs";
import Collapse from "./Collapse";
import { useState } from "react";
import ColorsContent from "./ColorsContent";
import BgContent from "./BgContent";

function SettingBox() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="toggle-settings" onClick={() => setToggle(!toggle)}>
        <BsFillHouseGearFill className="gear" />
      </div>

      {toggle && (
        <div className="settings-box">
          <div className="settings-container">
            <Collapse title="Couleurs"> {<ColorsContent />}</Collapse>
            <Collapse title="Backgrounds"> {<BgContent />} </Collapse>
          </div>
        </div>
      )}
    </>
  );
}

export default SettingBox;
