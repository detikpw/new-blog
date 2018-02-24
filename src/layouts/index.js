import React from 'react';
import { styled } from 'styletron-react';
import GatsbyLink from 'gatsby-link';
import { get } from 'lodash/fp';

import Header from './header';
import { rhythm } from '../utils/typography';
import { NAV_LINKS } from '../constants/site-config';

const Link = styled(
  ({ className, to, children }) =>
    <GatsbyLink className={className} to={to}>{children}</GatsbyLink>,
  {
    float: 'right',
  },
);

const Layout = styled('div', {
  display: 'block',
  borderTopWidth: '5px',
  borderTopStyle: 'solid',
  borderTopColor: 'black',
});

const Title = styled('H3', {
  marginBottom: rhythm(2),
  display: 'inline-block',
  fontStyle: 'normal',
});

export default ({ children, data }) => {
  const siteTitle = get(['site', 'siteMetadata', 'title'])(data);
  return (
    <Layout>
      <Header siteTitle={siteTitle} navLinks={NAV_LINKS} />
      <GatsbyLink to="/">
        <Title>
          {siteTitle}
        </Title>
      </GatsbyLink>
      <Link to="/about/">
        About
      </Link>
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
