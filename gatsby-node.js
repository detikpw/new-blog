const { get, kebabCase, uniq  } = require('lodash/fp');

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve('src/templates/blog-post.js');
  const categoryTemplate = path.resolve('src/templates/category.js');
  return new Promise((resolve) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                category
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
).then((result) => {
      const posts = result.data.allMarkdownRemark.edges;
      let categories = [];
      posts.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: blogPostTemplate,
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        });
        if (get(['frontmatter', 'category'])(node)) {
          categories = categories.concat(node.frontmatter.category)
        }
      });
      categories = uniq(categories);
      categories.forEach((category) => {
        createPage({
          path: `/${kebabCase(category)}/`,
          component: categoryTemplate,
          context: {
            category,
          },
        });
      });
      resolve();
    });
  });
};
