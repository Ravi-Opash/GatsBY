import React from "react";
// import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import * as style from "../styles/Intro.module.css";
import '../styles/global.css'

export default function Intro(props) {
  const intro = useStaticQuery(graphql`
    query IntroPage {
      contentfulEntry(contentful_id: { eq: "4R8Ll6vu0FYIz84QZTIaDF" }) {
        ... on ContentfulHomePage {
          heading
          subHeading
          content {
            content
          }
          image {
            url
            title
          }
        }
      }
    }
  `);

const handleClick = () => {
  props.onRef.current?.scrollIntoView({behavior: 'smooth'});
};

  console.log(props.onRef, 'intro');

  return (
    <div className={style.main}>
      <img
        id={style.background}
        src={intro.contentfulEntry.image[0].url}
        alt={intro.contentfulEntry.image[0].title}
      />
      <div className={style.sub_main}>
        <h1>{intro.contentfulEntry.heading}</h1>
        <img className={style.divider}
          src={intro.contentfulEntry.image[1].url}
          alt={intro.contentfulEntry.image[1].title}
        />
        <h4>{intro.contentfulEntry.content.content}</h4>
        <button className={style.intro_btn}>See More</button>

        <img id={style.vector}
          src={intro.contentfulEntry.image[2].url}
          alt={intro.contentfulEntry.image[2].title}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
