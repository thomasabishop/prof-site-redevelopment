import React from 'react';
import { Container } from '../styles/Container';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { Button } from '../styles/Button';
const PostListing = styled.div`
  display: grid;
  grid-template-columns: 80px 2fr;
  align-items: center;
  justify-content: center;
  padding: 1rem 0.5rem;
  border-radius: 6px;
  :hover {
    background: ${({ theme }) => theme.mainColor};
  }
`;

const ContentBlock = styled.div`
  padding-left: 2rem;
  display: inline-grid;
  align-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr;
`;

const Title = styled.h4`
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

const Image = styled(Img)`
  align-self: start;
`;

const Date = styled.p`
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
`;

const PostLink = styled(GatsbyLink)`
  color: inherit;
  :hover {
    color: inherit;
    background: ${({ theme }) => theme.mainColor};
  }
`;

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
      <Button style={{ marginTop: '1rem' }}>View all</Button>
    </Container>
  );
}
