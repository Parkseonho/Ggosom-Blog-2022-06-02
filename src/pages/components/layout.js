import React from "react";
import { Link } from "gatsby";
import { liLinkBlank, articleBottom } from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <nav>
        <ul>
          <li>
            <Link className={liLinkBlank} to="/">
              Home Page
            </Link>
          </li>
          <li>
            <Link className={liLinkBlank} to="/about">
              꼬솜이 소개 Page
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <article>
        <p className={articleBottom}> Copyright All Rights </p>
      </article>
    </div>
  );
};

export default Layout;
