import React from 'react';
import { styled } from 'styletron-react';
import { get } from 'lodash/fp';
import Header from './header';
import { NAV_LINKS } from '../constants/site-config';

const Layout = styled('div', {
  display: 'block',
  borderTopWidth: '5px',
  borderTopStyle: 'solid',
  borderTopColor: 'black',
});

export default ({ children, data }) => {
  const siteTitle = get(['site', 'siteMetadata', 'title'])(data);
  return (
    <Layout>
      <Header siteTitle={siteTitle} navLinks={NAV_LINKS} />
      {children()}
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
