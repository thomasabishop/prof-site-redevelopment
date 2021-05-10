import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import MainTemplate from '../templates/MainTemplate';
import { Container } from '../styles/Container';
import MetadataWidget from '../styles/MetadataWidget';
import {
  ContentBlock,
  Title,
  Image,
  Date,
  PostLink,
} from '../styles/BlogListingStyles';

const Listing = styled.div`
  display: grid;
  padding: 1rem 0.5rem;
  grid-template-columns: 80px 2fr 1fr;
  border-radius: 6px;
  align-items: center;
  justify-content: center;

  :hover {
    background: ${({ theme }) => theme.mainColor};
  }
`;

const TagsNCats = styled.div`
  justify-self: end;
  display: flex;
  flex-direction: row;
`;

export default function Posts() {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              id
              frontmatter {
                date(formatString: "YYYY-MM-DD")
                title
                tags
                tag_color
                intro
                template
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
    <MainTemplate>
      <Container>
        <h1>Posts</h1>
        {post.map(({ node }, index) => (
          <PostLink key={index} to={`.${node.fields.slug}`}>
            <Listing>
              <Image
                fluid={node.frontmatter.featured_image.childImageSharp.fluid}
              />
              <ContentBlock>
                <Title>{node.frontmatter.title}</Title>
                <Date>{node.frontmatter.date}</Date>
              </ContentBlock>
              <TagsNCats>
                <MetadataWidget
                  isTag
                  backgroundColor={node.frontmatter.tag_color}
                  initials="T"
                  metadata={node.frontmatter.tags}
                />
              </TagsNCats>
            </Listing>
          </PostLink>
        ))}
      </Container>
    </MainTemplate>
  );
}
