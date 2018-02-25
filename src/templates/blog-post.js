import React from 'react';
import Helmet from 'react-helmet';
import { get } from 'lodash/fp';
import Title from '../reusables/posts/title';
import DateTime from '../reusables/date-time';

export default ({ data }) => {
  const post = get('markdownRemark')(data);
  const title = get(['frontmatter', 'title'])(post);
  return (
    <div>
      <Helmet title={`${data.site.siteMetadata.title} - ${title}`} />
      <Title>{title}</Title>
      <DateTime>{get(['frontmatter', 'date'])(post)}</DateTime>
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
        date(formatString: "DD MMMM, YYYY")
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
