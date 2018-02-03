import React from "react";
import { styled } from "styletron-react";
import GatsbyLink from "gatsby-link";

import { rhythm } from "../utils/typography";

const Link = styled(({className, to, children}) =>
<GatsbyLink className={className} to={to}>{children}</GatsbyLink>,
  (props) => ({
  float: 'right'
}));

const Header = styled('div', {
  margin: '0 auto',
  maxWidth: 700,
  padding: rhythm(2),
  paddingTop: rhythm(1.5)
})

const Title = styled('H3', {
  marginBottom:rhythm(2),
  display:'inline-block',
  fontStyle:'normal'
})

export default ({ children, data }) => (
  <Header>
    <GatsbyLink to={`/`}>
      <Title>
        {data.site.siteMetadata.title}
      </Title>
    </GatsbyLink>
    <Link to={`/about/`}>
      About
    </Link>
    {children()}
  </Header>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
