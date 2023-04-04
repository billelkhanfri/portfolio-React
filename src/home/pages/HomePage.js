import React from "react";
import PageHeader from "../../common/components/PageHeader";
import "../styles/Home.scss";
import Hero from "../components/Hero";
import SettingBox from "../../common/components/SettingBox";

function HomePage() {
  return (
    <>
      <SettingBox></SettingBox>
      <PageHeader> </PageHeader>
      <Hero></Hero>
    </>
  );
}

export default HomePage;
