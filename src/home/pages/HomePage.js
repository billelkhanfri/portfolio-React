import React from "react";
import PageHeader from "../../common/components/PageHeader";
import "../styles/Home.scss";
import SettingBox from "../../common/components/SettingBox";
import { useEffect } from "react";
import Banner from "../components/Banner";
import Separator from "../../common/components/Separator";
import Skills from "../components/Skills";
import Competences from "../components/Competences";
import Learning from "../components/Learning";
//import Ligne from "../../common/components/Ligne";
import Footer from "../../common/components/Footer";

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
      <Banner></Banner>
      <Separator title="SKILLS" color="var(--primary-color)"></Separator>
      <Competences></Competences>
      <Learning></Learning>
      {/*<Ligne></Ligne>*/}
      <Separator title="Niveau" color="var(--primary-color)"></Separator>
      <div className="bar-wrapper">
        <Skills value={75} label="HTML" barColor="success" />
        <Skills value={50} label="CSS" barColor="warning" />
        <Skills value={50} label="JavaScript" barColor="danger" />
        <Skills value={40} label="Sass" barColor="danger" />
        <Skills value={50} label="Figma" barColor="warning" />
        <Skills value={40} label="Photoshop" barColor="danger" />
      </div>

      <Footer></Footer>
    </>
  );
}

export default HomePage;
