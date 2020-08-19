import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";

export const SearchPageTemplate = ({ contents }) => {
  return <section className="section"></section>;
};

const SearchPage = ({ data }) => {
  const { allMarkdownRemark } = data;

  return (
    <Layout>
      <SearchPageTemplate contents={allMarkdownRemark.edges} />
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
          rawMarkdownBody
        }
      }
    }
  }
`;
