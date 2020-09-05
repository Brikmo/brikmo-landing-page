import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import scrollToElement from "scroll-to-element";
import logo from "../../img/logo.svg";
import medium from "../../img/social/medium.svg";
import tiktok from "../../img/social/tiktok.svg";
import twitter from "../../img/social/twitter.svg";
import ButtonApp from "../../components/Images/ButtonApp";
import ButtonPlay from "../../components/Images/ButtonPlay";
import style from "./style.module.scss";

const FooterTemplate = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  function scroller(target, offset) {
    scrollToElement(target, {
      offset,
    });
  }

  function handleMenuLinkClick(l, e) {
    if (typeof window !== "undefined" && l.url.includes("#")) {
      const [anchorPath, anchor] = l.url.split("#");
      if (window.location.pathname === anchorPath) {
        e.preventDefault();
        scroller(`#${anchor}`, -80);
      }
    }
  }

  return (
    <footer
      className="footer has-background-white"
      style={{ borderTop: "1px solid #E1E4EB" }}
    >
      <div className="container">
        <div className="columns">
          <div className="contacts column">
            <img src={logo} alt="Brikmo" title="Brikmo" />
            <div className={style.socials}>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className={style.socialIcon}
              >
                <img src={medium} alt="Medium" title="Medium" />
              </a>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className={style.socialIcon}
              >
                <img src={tiktok} alt="Tik Tok" title="Tik Tok" />
              </a>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className={style.socialIcon}
              >
                <img src={twitter} alt="Twitter" title="Twitter" />
              </a>
            </div>
            <div>
              <p className={style.copyright}>
                Copyright © Brikmo, Inc. All rights reserved.
              </p>
              <p className={style.hashtag}>#TGBTG</p>
            </div>
            <div className={style.appButtons}>
              <div className={style.buttonApp}>
                <ButtonApp />
              </div>
              <div className={style.buttonApp}>
                <ButtonPlay />
              </div>
            </div>
          </div>
          <div className={`${style.links} column`}>
            <ul className={style.links}>
              {frontmatter.footerLinks &&
                frontmatter.footerLinks.map((link) => (
                  <li className={style.link} key={link.label}>
                    <Link
                      onClick={(e) => handleMenuLinkClick(link, e)}
                      to={
                        link.url.charAt(0) === "/" ? link.url : `/${link.url}`
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Footer() {
  return (
    <StaticQuery
      query={graphql`
        query Footer {
          markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
            frontmatter {
              footerLinks {
                label
                url
              }
            }
          }
        }
      `}
      render={(data) => <FooterTemplate data={data} />}
    />
  );
}
