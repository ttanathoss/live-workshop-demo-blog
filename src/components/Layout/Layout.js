import React from 'react';
import { Link } from 'gatsby';

import { title, navBar } from './layout.module.css';

const Layout = ({ pageTitle, children }) => (
  <main>
    <nav className={navBar}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
    <title>{pageTitle}</title>
    <h1 className={title}>{pageTitle}</h1>
    {children}
  </main>
);

export default Layout;
