import React from "react";
import Layout from "./components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <h1>안뇽</h1>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/ggosom1.jpg"
      />
    </Layout>
  );
};

export default IndexPage;
