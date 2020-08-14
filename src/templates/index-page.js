import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import HeroImage from "../components/Images/HeroImage";
import ButtonApp from "../components/Images/ButtonApp";
import ButtonPlay from "../components/Images/ButtonPlay";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import Contents from "../components/Contents";
import Header from "../components/Header";

export const IndexPageTemplate = ({
  title,
  subheading,
  mainContentTitle,
  contents,
  formSectionTitle,
}) => (
  <div className="page">
    <div className="hero-section">
      <Header />
      <div className="container content-wrapper">
        <div className="columns is-desktop is-tablet">
          <div className="column">
            <div className="content">
              <h1>{title}</h1>
              <p>{subheading}</p>
              <div className="app-buttons">
                <ButtonApp />
                <ButtonPlay />
              </div>
            </div>
          </div>
          <div className="column">
            <HeroImage />
          </div>
        </div>
      </div>
    </div>
    <Contents mainContentTitle={mainContentTitle} contents={contents} />
    <ContactForm formSectionTitle={formSectionTitle} />
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout
      title={frontmatter.seoTitle}
      description={frontmatter.seoDescription}
    >
      <IndexPageTemplate
        mainContentTitle={frontmatter.mainContentTitle}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        contents={frontmatter.contents}
        formSectionTitle={frontmatter.formSectionTitle}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        subheading
        mainContentTitle
        formSectionTitle
        seoTitle
        seoDescription
        contents {
          title
          text
          imagePosition
          additionalText
          image {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          links {
            label
            url
          }
        }
      }
    }
  }
`;
