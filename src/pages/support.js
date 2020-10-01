import React from "react";
import { graphql } from "gatsby";
import SupportPageTemplate from "../components/SupportPageTemplate";
import Layout from "../components/Layout";

const SearchPage = ({ data }) => {
  const { allMarkdownRemark } = data;

  return (
    <Layout>
      <SupportPageTemplate contents={allMarkdownRemark.edges} />
    </Layout>
  );
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
          fields {
            slug
          }
          rawMarkdownBody
        }
      }
    }
  }
`;
