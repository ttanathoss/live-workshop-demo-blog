import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout/Layout';

const About = () => (
  <Layout pageTitle="About Page">
    <Link to="/">How about going back to home?</Link>
  </Layout>
);

export default About;
