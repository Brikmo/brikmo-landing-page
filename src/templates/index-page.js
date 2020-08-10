import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import logo from "../img/logo.svg";
import HeroImage from "../components/Images/HeroImage";
import ButtonApp from "../components/Images/ButtonApp";
import ButtonPlay from "../components/Images/ButtonPlay";

import Layout from "../components/Layout";

export const IndexPageTemplate = ({
  title,
  subheading,
  mainContentTitle,
  contents,
  formSectionTitle,
}) => (
  <div className="page">
    <div className="hero-section">
      <div className="container header">
        <img src={logo} alt="Brikmo" title="Brikmo" />
        <button className="button">Get the App</button>
      </div>
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
    <div className="container main-content">
      <h1>{mainContentTitle}</h1>
      {contents.map((content) => (
        <>
          <div
            className={`text-block columns ${
              content.imagePosition === "left" && "reverse"
            }`}
          >
            {content.imagePosition === "left" && (
              <div className="column is-6">
                {content.image && (
                  <Img
                    fluid={content.image.childImageSharp.fluid}
                    className="image"
                  />
                )}
              </div>
            )}
            <div className="text column is-6">
              <div className="title">{content.title}</div>
              <div className="divider"></div>
              <div className="description">{content.text}</div>
              {content.additionalText && (
                <div className="additional-text">{content.additionalText}</div>
              )}
              {content.links && (
                <div className="links">
                  {content.links.map((link) => (
                    <div className="link">
                      <a href={link.url} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {content.imagePosition === "right" && (
              <div className="column is-6">
                {content.image && (
                  <Img
                    fluid={content.image.childImageSharp.fluid}
                    className="image"
                  />
                )}
              </div>
            )}
          </div>
          {content.imagePosition === "bottom" && (
            <div className="image column">
              {content.image && (
                <Img fluid={content.image.childImageSharp.fluid} />
              )}
            </div>
          )}
        </>
      ))}
    </div>
    <div className="form-content">
      <p className="title">{formSectionTitle}</p>
      <div className="divider"></div>
      <div className="form-area">
        <div className="form-field">
          <label>Full Name</label>
          <input name="full-name" type="text" placeholder="Julia William" />
        </div>
        <div className="form-field">
          <label>E-mail Address</label>
          <input name="email" type="email" placeholder="you@example.com" />
        </div>
        <div className="form-field message-box">
          <label>Your message*</label>
          <textarea name="email" placeholder="Type your message..." />
          <button>Submit</button>
        </div>
      </div>
    </div>
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
    <Layout>
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
        contents {
          title
          text
          imagePosition
          additionalText
          links {
            label
            url
          }
        }
      }
    }
  }
`;
