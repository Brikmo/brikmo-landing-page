import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PageTemplate from "../components/PageTemplate";

const TermsPage = ({ data }) => {
  console.log(data);
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PageTemplate
        title={post.frontmatter.title}
        contents={post.frontmatter.contents}
      />
    </Layout>
  );
};

TermsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TermsPage;

export const termsPageQuery = graphql`
  query TermsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        contents {
          title
          body
        }
      }
    }
  }
`;
