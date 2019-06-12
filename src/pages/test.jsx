import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from '../components';

import { Container } from '../components';

import Skills from '../components/Skills';

const NotFoundPage = ({ location }) => (
  <Layout pathname={location.pathname}>
    <Container type="text">
      <Skills />
    </Container>
  </Layout>
);

export default NotFoundPage;

NotFoundPage.propTypes = {
  location: PropTypes.object.isRequired
};
