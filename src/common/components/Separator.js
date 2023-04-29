import React from "react";
import "../../styles/variables.scss";
import styled from "styled-components";

const SectionWrapper = styled.div`
  padding: 6px 0;
  text-align: center;
  background: #fff;
  margin: 0 40px;
  border-radius: 5px;
`;

const SectionTitle = styled.h1`
  font-size: 36px;
    color: var(--primary-color);
    border-right: 6px solid var(--primary-color);
    width: fit-content;
    margin: auto;
    padding: 6px 50px;
        border-left: 6px solid var(--primary-color);

}
`;

function Section({ title, children }) {
  return (
    <>
      <SectionWrapper>
        <SectionTitle>{title}</SectionTitle>
        {children}
      </SectionWrapper>
    </>
  );
}

export default Section;
