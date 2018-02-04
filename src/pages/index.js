import React from 'react';
import { styled } from 'styletron-react';
import Link from 'gatsby-link';
import { get } from 'lodash/fp';

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

export default ({ data }) => {
  const markdownRemarks = get('allMarkdownRemark')(data);
  return (
    <div>
      <Title>
        Amazing Pandas Eating Things
      </Title>
      <Subtitle>{markdownRemarks.totalCount}{' Posts'}</Subtitle>
      {markdownRemarks.edges.map(({ node }) => {
        const frontmatter = get('frontmatter')(node);
        return (
          <div key={get('id')(node)}>
            <Link
              to={get(['fields', 'slug'])(node)}
              css={{ textDecoration: 'none', color: 'inherit' }}
            >
              <PostTitle marginBottom={rhythm(1 / 4)}>
                {frontmatter.title}{' '}
                <GreyText>{'— '}{frontmatter.date}</GreyText>
              </PostTitle>
              <Excerpt>{node.excerpt}</Excerpt>
            </Link>
          </div>
        );
      })}
    </div>
  );
};


export const query = graphql`
  query IndexQuery {
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
