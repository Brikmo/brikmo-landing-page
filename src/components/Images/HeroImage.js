import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Phone-Mockup.png" }) {
        childImageSharp {
          fluid {
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
      className="heroImage"
      imgStyle={{ objectFit: "contain" }}
    />
  );
};

export default Image;
