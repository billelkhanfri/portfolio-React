// ColorsContent.js

import React, { useState } from "react";
import styled from "styled-components";

const ColorBullets = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bullet = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;

function ColorsContent(props) {
  const [primaryColor, setPrimaryColor] = useState("#ff9800");

  const handleClick = (color) => {
    setPrimaryColor(color);
    document.documentElement.style.setProperty("--primary-color", color);
  };

  return (
    <div>
      <ColorBullets>
        <Bullet color="#FF4136" onClick={() => handleClick("#FF4136")} />
        <Bullet color="#0074D9" onClick={() => handleClick("#0074D9")} />
        <Bullet color="#FFDC00" onClick={() => handleClick("#FFDC00")} />
        <Bullet color="#2ECC40" onClick={() => handleClick("#2ECC40")} />
      </ColorBullets>
    </div>
  );
}

export default ColorsContent;
