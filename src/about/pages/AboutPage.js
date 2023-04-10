import React from "react";
import PageHeader from "../../common/components/PageHeader";
import SettingBox from "../../common/components/SettingBox";
import Education from "../components/Education";

function AboutPage() {
  return (
    <>
      <SettingBox></SettingBox>
      <PageHeader> </PageHeader>
      <Education
        year="2023"
        leftContent="hello"
        rightContent="hello right"
        contentTitle="Heading"
      />
      <Education
        leftContent="hello"
        rightContent="hello right"
        year="2022"
        title="title"
      />
    </>
  );
}

export default AboutPage;
