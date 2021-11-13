import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import styled from "styled-components";
// import Img from "gatsby-image";
import Seo from "../components/seo";
import MainTemplate from "../templates/MainTemplate";
import { Container } from "../styles/Container";
import MetadataWidget from "../styles/MetadataWidget";

const PostTitle = styled.h1`
  //  padding-bottom: 20px;
  font-weight: 600;
  //border-bottom: none;
`;
const PostDate = styled.h4`
  margin: 0;
  margin-right: 0.5rem;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.4px;
  text-transform: uppercase;
`;

// const PostImage = styled(Img)`
//   max-height: 350px;
// `;

const MetadataWrapper = styled.div`
  display: flex;
  //  flex-direction: row;
`;

const PreambleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 1rem;
`;

export default function PostTemplate({ data }) {
  const post = data.mdx;
  // let featuredImgFluid = post.frontmatter.featured_image.childImageSharp.fluid;
  return (
    <MainTemplate>
      <Seo
        title={post.frontmatter.title}
        image={post.frontmatter.featured_image}
      />
      <article>
        <Container>
          {/* <PostImage fluid={featuredImgFluid} /> */}
          <PostTitle>{post.frontmatter.title}</PostTitle>
          <PreambleWrapper>
            <PostDate>{post.frontmatter.date} </PostDate>

            <MetadataWrapper>
              <MetadataWidget metadata={post.frontmatter.category} />
              <MetadataWidget
                //   isTag
                //   backgroundColor={post.frontmatter.tag_color}
                metadata={post.frontmatter.tags}
              />
            </MetadataWrapper>
          </PreambleWrapper>
          {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
          <MDXRenderer>{post.body}</MDXRenderer>
        </Container>
      </article>
    </MainTemplate>
  );
}

export const query = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        date(formatString: "D MMMM YYYY")
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
