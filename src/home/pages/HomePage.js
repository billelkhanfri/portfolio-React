import React from "react";
import PageHeader from "../../common/components/PageHeader";
import "../styles/Home.scss";
import Hero from "../components/Hero";
import SettingBox from "../../common/components/SettingBox";
import { useEffect } from "react";

function HomePage() {
  useEffect(() => {
    const savedColor = localStorage.getItem("primaryColor");
    if (savedColor) {
      document.documentElement.style.setProperty("--primary-color", savedColor);
    }
  }, []);
  return (
    <>
      <SettingBox></SettingBox>
      <PageHeader> </PageHeader>
      <Hero></Hero>
    </>
  );
}

export default HomePage;
