import React from 'react';
import { get } from 'lodash/fp';
import Link from '../reusables/link';
import PostsWrapper from '../reusables/posts/lists';
import Post from '../reusables/posts/item';
import Title from '../reusables/posts/title';
import DateTime from '../reusables/date-time';
import { BodyText } from '../reusables/typography';
import { Paper } from '../reusables/segment';

export default ({ data }) => {
  const markdownRemarks = get('allMarkdownRemark')(data);
  return (
    <PostsWrapper>
      <Paper>
        {markdownRemarks.edges.map(({ node }) => {
          const frontmatter = get('frontmatter')(node);
          return (
              <Post key={get('id')(node)}>
                <Title>
                  <Link
                    to={get(['fields', 'slug'])(node)}
                  >
                    {frontmatter.title}
                  </Link>
                </Title>
                <DateTime>{frontmatter.date}</DateTime>
                {<BodyText>{node.excerpt}</BodyText>}
              </Post>
          );
        })}
      </Paper>
    </PostsWrapper>
  );
};


export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC}
      filter: { frontmatter: { published: { ne: false } } }
    ) {
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
