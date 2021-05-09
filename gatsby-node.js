const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

// Access blog post in file directory and generate slug from filename
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `content` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

// Create pages corresponding to each blog file
exports.createPages = async ({ graphql, actions }) => {
  const blogTemplate = path.resolve('./src/templates/PostTemplate.jsx');
  const { createPage } = actions;
  const result = await graphql(
    `
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                template
                category
                tags
              }
            }
          }
        }
      }
    `
  );

  const posts = result.data.allMarkdownRemark.edges;

  // Output content to blog article page template

  posts.forEach(({ node }) => {
    createPage({
      path: `/posts${node.fields.slug}`,
      component: blogTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    });
  });
};
