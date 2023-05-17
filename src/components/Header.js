import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import React, { useState } from "react";
import * as styles from "../styles/Header.module.css";
import "../styles/global.css";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const data = useStaticQuery(graphql`
    query ProjectsPage {
      logo: contentfulAsset(title: { eq: "logo" }) {
        title
        url
      }
      media: contentfulAsset(title: { eq: "Header_media" }) {
        title
        url
      }
    }
  `);

// outline: open ? "10000px solid rgba(0, 0, 0, 0.75)" : "unset",

  const onNavClick = (event) => {
    console.log("clicked..!");
    setIsActive((current) => !current);
  };

  // console.log(isActive);

  return (
    <header className={isActive? styles.changed_header : ""}>
      <div className={styles.header_logo}>
        <img src={data.logo.url} alt={data.logo.title} />
      </div>
      <div className={styles.header_left}>
          <div className={isActive? styles.changed_nav : styles.header_nav}>
            <ul>
              <li>
                <Link to="/">Weddings</Link>
              </li>
              <li>
                <Link to="/">Corporate</Link>
              </li>
              <li>
                <Link to="/">Events</Link>
              </li>
              <li>
                <Link to="/">Our Venues</Link>
              </li>
              <li>
                <Link to="/">Our Family</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
            </ul>
          </div>
        <div className={styles.container} onClick={onNavClick}>
          <div className={styles.bar1}></div>
          <div className={styles.bar2}></div>
          <div className={styles.bar3}></div>
        </div>
        <div className={styles.header_media}>
          <img src={data.media.url} alt={data.media.title} />
        </div>
      </div>
    </header>
  );
};

export default Header;

// export const query = graphql`
//   query ProjectsPage {
//   contentfulAsset(title: {eq: "logo"}) {
//     title
//     url
//   }
// }
// `;
