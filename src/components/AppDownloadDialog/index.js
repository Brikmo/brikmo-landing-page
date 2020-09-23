import React from "react";
import { graphql, StaticQuery } from "gatsby";
import ButtonApp from "../Images/ButtonApp";
import ButtonPlay from "../Images/ButtonPlay";
import style from "./style.module.scss";

const AppDownloadDialogTemplate = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <div id="open-modal" className={style.modalWindow}>
      <div>
        <a href="#modal-close" title="Close" className={style.modalClose}>
          close &times;
        </a>
        <h1>CSS Modal</h1>
        <div className={style.appButtons}>
          <div className={style.buttonApp}>
            <a href={frontmatter.iosAppLink}>
              <ButtonApp />
            </a>
          </div>
          <div className={style.buttonApp}>
            <a href={frontmatter.androidAppLink}>
              <ButtonPlay />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function AppDownloadDialog() {
  return (
    <StaticQuery
      query={graphql`
        query AppDownloadDialog {
          markdownRemark {
            frontmatter {
              iosAppLink
              androidAppLink
            }
          }
        }
      `}
      render={(data) => <AppDownloadDialogTemplate data={data} />}
    />
  );
}
