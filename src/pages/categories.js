import React from 'react';

// Utilities
import { kebabCase } from 'lodash/fp';

// Components
import Helmet from 'react-helmet';
import List from '../reusables/posts/lists';
import ListItem from '../reusables/posts/item';
import Link from '../reusables/link';
import { PageHeader } from '../reusables/typography';

const CategoriesPage = ({
  data: { allMarkdownRemark: { group }, site: { siteMetadata: { title } } },
}) => (
  <div>
    <Helmet title={title} />
    <div>
      <PageHeader>Categories</PageHeader>
      <List>
        {group.map(category => (
          <ListItem key={category.fieldValue}>
            <Link to={`/${kebabCase(category.fieldValue)}/`}>
              {category.fieldValue} ({category.totalCount})
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  </div>
);

export default CategoriesPage;

export const pageQuery = graphql`
  query CategoriesQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`;
