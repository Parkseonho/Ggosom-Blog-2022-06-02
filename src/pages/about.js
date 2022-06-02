import React from "react";
import Layout from "./components/layout";
import { StaticImage } from "gatsby-plugin-image";

const About = () => {
  return (
    <Layout pageTitle="꼬솜소개 Page">
      <h1>🐈꼬솜이를 소개합니다🐈</h1>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/ggosom3.jpg"
      />
      <p> 😊 탄생일 : 2021-04-15</p>
    </Layout>
  );
};

export default About;
