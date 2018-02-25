import React from 'react';
import { get, upperFirst } from 'lodash/fp';
import styled from 'styled-components';
import Link from '../reusables/link';
import { BodyText, Title } from '../reusables/typography';
import PostsWrapper from '../reusables/posts/lists';
import PostTitle from '../reusables/posts/title';
import PostItem from '../reusables/posts/item';
import DateTime from '../reusables/date-time';

const Category = ({ pathContext, data }) => {
  const { category } = pathContext;
  const { edges } = data.allMarkdownRemark;
  const PostTitleWithH3 = styled(PostTitle)``.withComponent('h3');
  const PageHeader = Title.extend`
    && {margin-bottom: 1.3334em;}
  `;
  return (
    <div>
      <PageHeader>{upperFirst(category)}</PageHeader>
      <PostsWrapper>
        {edges.map(({ node }) => {
          const frontmatter = get('frontmatter')(node);
          return (
            <PostItem key={get('id')(node)}>
              <PostTitleWithH3>
                <Link
                  to={get(['fields', 'slug'])(node)}
                >
                  {frontmatter.title}
                </Link>
              </PostTitleWithH3>
              <DateTime>{frontmatter.date}</DateTime>
              {<BodyText>{node.excerpt}</BodyText>}
            </PostItem>
          );
        })}
      </PostsWrapper>
      <Link to="/categories">All Categories</Link>
    </div>
  );
};

export default Category;

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: {
        category: { eq: $category }
        published: { ne: false }
        } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            category
          }
          fields{
            slug
          }
          excerpt
        }
      }
    }
  }
`;
