import React from "react";
import { Link } from "gatsby";
import {
  articleBottom,
  navLinks,
  navLinkItem,
  navLinkText,
  container,
  containerHF,
  full,
  heading,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={full}>
      <title>{pageTitle}</title>
      <nav className={container}>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">
              Home Page
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/about">
              꼬솜이 소개 Page
            </Link>
          </li>
        </ul>
      </nav>
      <main className={containerHF}>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <article className={container}>
        <p className={articleBottom}> Copyright All Rights </p>
      </article>
    </div>
  );
};

export default Layout;
