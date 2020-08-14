import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import Header from "../Header";
import style from "./style.module.scss";

const PageTemplate = ({ title, contents }) => {
  return (
    <div className="page">
      <Header inverted />
      <div className={style.hero}>
        <h1 className={style.title}>{title}</h1>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-6 is-offset-3">
              {contents &&
                contents.map((content) => (
                  <div className={style.content}>
                    <p className={style.contentTitle}>{content.title}</p>
                    <ReactMarkdown
                      className={style.contentBody}
                      source={content.body}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

export default PageTemplate;
