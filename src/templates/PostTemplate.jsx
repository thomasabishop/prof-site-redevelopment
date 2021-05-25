import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Seo from '../components/seo';
import MainTemplate from '../templates/MainTemplate';
import { Container } from '../styles/Container';
import MetadataWidget from '../styles/MetadataWidget';
import 'katex/dist/katex.min.css';

const PostTitle = styled.h1`
  //  padding-bottom: 20px;
  //border-bottom: none;
`;
const PostDate = styled.h4``;

const PostImage = styled(Img)`
  max-height: 350px;
`;

const TagsNCats = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function PostTemplate({ data }) {
  const post = data.mdx;
  let featuredImgFluid = post.frontmatter.featured_image.childImageSharp.fluid;
  return (
    <MainTemplate>
      <Seo
        title={post.frontmatter.title}
        image={post.frontmatter.featured_image}
      />
      <article>
        <Container>
          <PostImage fluid={featuredImgFluid} />
          <PostTitle>{post.frontmatter.title}</PostTitle>
          <PostDate>{post.frontmatter.date}</PostDate>
          <TagsNCats>
            <MetadataWidget initials="C" metadata={post.frontmatter.category} />
            <MetadataWidget
              isTag
              backgroundColor={post.frontmatter.tag_color}
              initials="T"
              metadata={post.frontmatter.tags}
            />
          </TagsNCats>
          {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
          <MDXRenderer>{post.body}</MDXRenderer>
        </Container>
      </article>
    </MainTemplate>
  );
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        date(formatString: "Do MMMM YYYY")
        title
        category
        tags
        tag_color
        featured_image {
          childImageSharp {
            fluid(maxHeight: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
