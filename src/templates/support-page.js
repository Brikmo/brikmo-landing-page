import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PageTemplate from "../components/PageTemplate";

const SupportPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout
      title={post.frontmatter.seoTitle}
      description={post.frontmatter.seoDescription}
    >
      <PageTemplate
        title={post.frontmatter.title}
        singleContent={post.rawMarkdownBody}
      />
    </Layout>
  );
};

SupportPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SupportPage;

export const pageQuery = graphql`
  query SupportPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      rawMarkdownBody
      frontmatter {
        seoTitle
        seoDescription
        title
        description
      }
    }
  }
`;
