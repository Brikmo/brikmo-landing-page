import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "button-app.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  if (!data) return null;
  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      className="button-app"
    />
  );
};

export default Image;
