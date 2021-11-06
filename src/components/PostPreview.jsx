import React from "react";
import { Container } from "../styles/Container";
import { graphql, useStaticQuery } from "gatsby";
import {
  PostListing,
  ContentBlock,
  Title,
  Image,
  Date,
  PostLink,
} from "../styles/BlogListingStyles";
import { GatsbyButton } from "../styles/Button";

export default function PostPreview(props) {
  const data = useStaticQuery(
    graphql`
      query {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 4) {
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

  const post = data.allMdx.edges;

  return (
    <Container>
      <h2>{props.title}</h2>

      {post.map(({ node }, index) => (
        <PostLink key={index} to={`posts${node.fields.slug}`}>
          <PostListing>
            {/* <Image
              fluid={node.frontmatter.featured_image.childImageSharp.fluid}
            /> */}
            <ContentBlock>
              <Title>{node.frontmatter.title}</Title>
              <Date>{node.frontmatter.date}</Date>
            </ContentBlock>
          </PostListing>
        </PostLink>
      ))}

      <GatsbyButton to="/posts" style={{ marginTop: "1rem" }}>
        View all
      </GatsbyButton>
    </Container>
  );
}
