import React from 'react';
import styled from 'styled-components';
import { get } from 'lodash/fp';
import Header from './header';
import { NAV_LINKS } from '../constants/site-config';

const Layout = styled.div`
  display: block;
  border-top-width: 5px;
  border-top-style: solid;
  border-top-color: black;
`;

const ContentWrapper = styled.div`
  margin: 0 auto;
  display: block;
`;

export default ({ children, data }) => {
  const siteTitle = get(['site', 'siteMetadata', 'title'])(data);
  return (
    <Layout>
      <Header siteTitle={siteTitle} navLinks={NAV_LINKS} />
      <ContentWrapper>
        {children()}
      </ContentWrapper>
    </Layout>
  );
};

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
