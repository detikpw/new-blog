import React from 'react';
import { styled } from 'styletron-react';
import GatsbyLink from 'gatsby-link';
import { get } from 'lodash/fp';

import Navigation from './navigation';
import { rhythm } from '../utils/typography';

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

export default ({ children, data }) => (
  <Layout>
    <Navigation />
    <GatsbyLink to="/">
      <Title>
        {get(['site', 'siteMetadata', 'title'])(data)}
      </Title>
    </GatsbyLink>
    <Link to="/about/">
      About
    </Link>
    {children()}
  </Layout>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
