import React from "react";
import Img from "gatsby-image";
import ReactMarkdown from "react-markdown";
import style from "./style.module.scss";

const Contents = ({ contents, mainContentTitle }) => {
  return (
    <div className={`container ${style.mainContent}`}>
      <h1>{mainContentTitle}</h1>
      {contents.map((content) => (
        <>
          <div
            className={`${style.textBlock} columns ${
              content.imagePosition === "left" && style.reverse
            }`}
          >
            {content.imagePosition === "left" && (
              <div className="column is-6">
                {content.image && content.image.childImageSharp && (
                  <Img
                    fluid={content.image.childImageSharp.fluid}
                    className={style.image}
                  />
                )}
              </div>
            )}
            <div className={`${style.text} column is-6`}>
              <div className={style.title}>{content.title}</div>
              <div className={style.divider}></div>
              <ReactMarkdown className={style.description}>
                {content.text}
              </ReactMarkdown>
              {content.additionalText && (
                <div className={style.additionalText}>
                  {content.additionalText}
                </div>
              )}
              {content.links && (
                <div className={style.links}>
                  {content.links.map((link) => (
                    <div className={style.link}>
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
                {content.image && content.image.childImageSharp && (
                  <Img
                    fluid={content.image.childImageSharp.fluid}
                    className={style.image}
                  />
                )}
              </div>
            )}
          </div>
          {content.imagePosition === "bottom" && (
            <div className={`container ${style.image} ${style.bottom}`}>
              {content.image && content.image.childImageSharp && (
                <Img fluid={content.image.childImageSharp.fluid} />
              )}
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default Contents;
