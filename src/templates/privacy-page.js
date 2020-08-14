import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PageTemplate from "../components/PageTemplate";

const PrivacyPage = ({ data }) => {
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

PrivacyPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PrivacyPage;

export const privacyPageQuery = graphql`
  query PrivacyPage($id: String!) {
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
