import React from 'react';
import Helmet from 'react-helmet';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <Helmet title={`${data.site.siteMetadata.title} - ${post.frontmatter.title}`} />
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
