import React from 'react';
import Helmet from 'react-helmet';
import { get } from 'lodash/fp';

export default ({ data }) => {
  const post = get('markdownRemark')(data);
  const title = get(['frontmatter', 'title'])(post);
  return (
    <div>
      <Helmet title={`${data.site.siteMetadata.title} - ${title}`} />
      <h1>{title}</h1>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
