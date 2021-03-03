import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout/Layout';

const IndexPage = () => (
  <Layout pageTitle="Home Page">
    <p>
      Hi there, my name is Janusz... And here is <Link to="/about">about</Link>
    </p>
  </Layout>
);

export default IndexPage;
