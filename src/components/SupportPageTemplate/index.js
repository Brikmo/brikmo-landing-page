import React from "react";
import Header from "../Header";
import style from "./style.module.scss";
import { Link } from "gatsby";

const SupportPageTemplate = ({ contents }) => {
  const [search, setSearch] = React.useState("");

  const results =
    search !== ""
      ? contents.filter((content) =>
          content.node.frontmatter.title.toLowerCase().includes(search)
        )
      : contents;
  return (
    <div className="page">
      <Header inverted />
      <div className={style.hero}>
        <h1 className={style.title}>How can we help you?</h1>
        <div style={{ position: "relative" }}>
          <div className={style.searchIcon} />
          <input
            type="text"
            className={style.searchbar}
            placeholder={"Type here to search a topic..."}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className={`columns ${style.results}`}>
            {results && results.length > 0 ? (
              results.map((content) => (
                <div className={style.boxResults}>
                  <Link to={content.node.frontmatter.path}>
                    {content.node.frontmatter.title}
                  </Link>
                </div>
              ))
            ) : (
              <p>
                No results. Please contact us as at{" "}
                <a href="mailto:team@brikmo.co">team@brikmo.co</a>
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPageTemplate;
