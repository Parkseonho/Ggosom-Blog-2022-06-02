import React from "react";
import Layout from "./components/layout";
import { StaticImage } from "gatsby-plugin-image";

const About = () => {
  return (
    <Layout pageTitle="κΌ¬μμκ° Page">
      <h1>πκΌ¬μμ΄λ₯Ό μκ°ν©λλ€π</h1>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/ggosom3.jpg"
      />
      <p> π νμμΌ : 2021-04-15</p>
    </Layout>
  );
};

export default About;
