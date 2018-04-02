import React from 'react';
import Helmet from 'react-helmet';
import { get } from 'lodash/fp';
import styled from 'styled-components';
import Title from '../reusables/posts/title';
import DateTime from '../reusables/date-time';
import Link from '../reusables/link';
import { Paper } from '../reusables/segment';
import { GREY, PRIMARY_BLACK } from '../constants/color';

const ContentWrapper = styled.div`
  blockquote {
    border-left: 10px solid ${PRIMARY_BLACK};
    margin: 1.5em 10px;
    padding: 0.5em 10px;
    quotes: "\\201C""\\201D""\\2018""\\2019";
  }
  blockquote:before {
    color: ${GREY};
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }
`;

export default ({ data }) => {
  const post = get('markdownRemark')(data);
  const title = get(['frontmatter', 'title'])(post);
  const category = get(['frontmatter', 'category'])(post);
  return (
    <div>
      <Helmet title={`${data.site.siteMetadata.title} - ${title}`} />
      <Title>{title}</Title>
      <DateTime>{get(['frontmatter', 'date'])(post)}</DateTime>
      <Paper>
        <ContentWrapper
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      category: <Link to={`/${category}`}>{category}</Link>
      </Paper>
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        category
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
