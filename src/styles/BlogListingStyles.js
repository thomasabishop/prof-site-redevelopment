import styled from "styled-components";
import Img from "gatsby-image";
import { Link as GatsbyLink } from "gatsby";

const PostListing = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: start;
  justify-content: center;
  padding: 0.5rem 0;
  // border-radius: 6px;
  margin-bottom: 0.5rem;
  :hover {
    background: ${({ theme }) => theme.mainColor};
  }
`;

const ContentBlock = styled.div`
  // padding-left: 2rem;
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

export { PostListing, ContentBlock, Title, Image, Date, PostLink };
