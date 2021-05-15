import React from 'react';
import { Container } from '../styles/Container';
import { graphql, useStaticQuery } from 'gatsby';
import {
  PostListing,
  ContentBlock,
  Title,
  Image,
  Date,
  PostLink,
} from '../styles/BlogListingStyles';
import { GatsbyButton } from '../styles/Button';

export default function PostPreview(props) {
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
      {props.pageContext ? <h1>{props.title}</h1> : <h2>{props.title}</h2>}

      {post.map(({ node }, index) => (
        <PostLink
          key={index}
          to={
            props.pageContext
              ? `.${node.fields.slug}`
              : `posts${node.fields.slug}`
          }
        >
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

      {!props.pageContext && (
        <GatsbyButton to="/posts" style={{ marginTop: '1rem' }}>
          View all
        </GatsbyButton>
      )}
    </Container>
  );
}
