import React from "react";
import PageHeader from "../../common/components/PageHeader";
import SettingBox from "../../common/components/SettingBox";
import Education from "../components/Education";
import Hero from "../components/Hero";
import Separator from "../../common/components/Separator";
import About from "../components/About";
import Footer from "../../common/components/Footer";
import Timeline from "../components/TimeLine";

function AboutPage() {
  return (
    <>
      <SettingBox></SettingBox>
      <PageHeader> </PageHeader>
      <Hero></Hero>
      <About></About>
      <Separator title="Education"></Separator>

      <Timeline></Timeline>
      <Footer></Footer>
    </>
  );
}

export default AboutPage;
