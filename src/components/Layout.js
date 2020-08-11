import React from "react";
import { Helmet } from "react-helmet";
import { graphql, StaticQuery } from "gatsby";
import Footer from "../components/Footer";
import "./all.scss";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

const LayoutTemplate = ({ children, data }) => {
  const { title, description } = useSiteMetadata();
  const { frontmatter } = data.markdownRemark;
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{frontmatter.seoTitle || title}</title>
        <meta
          name="description"
          content={frontmatter.seoDescription || description}
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={frontmatter.seoTitle || title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default function TemplateWrapper({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteMetaData {
          markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
            frontmatter {
              seoTitle
              seoDescription
            }
          }
        }
      `}
      render={(data) => <LayoutTemplate data={data}>{children}</LayoutTemplate>}
    />
  );
}
