import React from "react";
import { graphql } from "gatsby";
import SupportPageTemplate from "../components/SupportPageTemplate";

export const SearchPageTemplate = ({ contents }) => {
  return <section className="section"></section>;
};

const SearchPage = ({ data }) => {
  const { allMarkdownRemark } = data;

  return <SupportPageTemplate contents={allMarkdownRemark.edges} />;
};

export default SearchPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "support-page" } } }
    ) {
      edges {
        node {
          frontmatter {
            description
            title
            path
          }
          rawMarkdownBody
        }
      }
    }
  }
`;
