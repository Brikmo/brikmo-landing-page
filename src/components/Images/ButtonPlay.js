import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "button-play.png" }) {
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
      className="button-play"
    />
  );
};

export default Image;
