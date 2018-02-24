import React from 'react';
import { styled } from 'styletron-react';
import Link from 'gatsby-link';

import { rhythm } from '../utils/typography';

const Title = styled('h1', {
  display: 'inline-block',
  borderBottom: '1px solid',
});

const Subtitle = styled('h2', null);

const PostTitle = styled('h3', {
  marginBottom: rhythm(1 / 4),
});

const GreyText = styled('span', {
  color: '#BBB',
});

const Excerpt = styled('p', null);

export default ({ data }) => (
  <div>
    <Title>
      Amazing Pandas Eating Things
    </Title>
    <Subtitle>{data.allMarkdownRemark.totalCount}{' Posts'}</Subtitle>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <Link
          to={node.fields.slug}
          css={{ textDecoration: 'none', color: 'inherit' }}
        >
          <PostTitle marginBottom={rhythm(1 / 4)}>
            {node.frontmatter.title}{' '}
            <GreyText>{'— '}{node.frontmatter.date}</GreyText>
          </PostTitle>
          <Excerpt>{node.excerpt}</Excerpt>
        </Link>
      </div>
    ))}
  </div>
);

export const query = graphql`
  query Wakwaw {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;
