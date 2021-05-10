import React from 'react';
import { Container } from '../styles/Container';
import { graphql, useStaticQuery, Link } from 'gatsby';
import {
  PostListing,
  ContentBlock,
  Title,
  Image,
  Date,
  PostLink,
} from '../styles/BlogListingStyles';
import { Button } from '../styles/Button';

export default function PostPreview() {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              id
              frontmatter {
                date(formatString: "Do MMMM YYYY")
                title
                featured_image {
                  childImageSharp {
                    fluid(maxWidth: 80) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );
  const post = data.allMarkdownRemark.edges;

  return (
    <Container>
      <h2>Recent posts</h2>
      {post.map(({ node }, index) => (
        <PostLink key={index} to={`posts${node.fields.slug}`}>
          <PostListing>
            <Image
              fluid={node.frontmatter.featured_image.childImageSharp.fluid}
            />
            <ContentBlock>
              <Title>{node.frontmatter.title}</Title>
              <Date>{node.frontmatter.date}</Date>
            </ContentBlock>
          </PostListing>
        </PostLink>
      ))}
      <Link to="/posts">
        <Button style={{ marginTop: '1rem' }}>View all</Button>
      </Link>
    </Container>
  );
}
