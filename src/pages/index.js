import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout/Layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => (
  <Layout pageTitle="Home Page">
    <p>
      Hi there, my name is Janusz... And here is <Link to="/about">about</Link>
    </p>
    <StaticImage
      src="https://pbs.twimg.com/media/Evkn6fRWgAgxOWe?format=jpg&name=4096x4096"
      alt="A black and brown dog"
      title="A black and brown dog"
    />
    <StaticImage
      src="https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
      alt="Some random image from unsplash"
      title="Some random image from unsplash"
    />
  </Layout>
);

export default IndexPage;
