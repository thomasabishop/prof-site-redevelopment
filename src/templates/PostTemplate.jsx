import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import styled from "styled-components";
// import Img from "gatsby-image";
import Seo from "../components/seo";
import MainTemplate from "../templates/MainTemplate";
import { Container } from "../styles/Container";
import Metadatum from "../components/Metadatum";
import "katex/dist/katex.min.css";

const PostTitle = styled.h1`
  font-weight: 600;
  //border-bottom: none;
`;

// const PostImage = styled(Img)`
//   max-height: 350px;
// `;

const Metadata = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 0.5rem;
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
          <Metadata>
            <Metadatum icon="date" metadata={post.frontmatter.date} />
            <Metadatum metadata={post.frontmatter.category} />
          </Metadata>
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
