import React from "react";
import "../styles/global.css";
import { useStaticQuery, graphql } from "gatsby";
import * as style from "../styles/Venue.module.css";

function Venue() {
  const data = useStaticQuery(graphql`
    query VenuePage {
      contentfulEntry(contentful_id: { eq: "6SHzr9WHjhoQkqSoNocpOx" }) {
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

  // console.log(data.contentfulEntry);

  return (
    <div className={style.main_venue}>
      <div className={style.venue_heading}>
        <img
          src={data.contentfulEntry.image[0].url}
          alt={data.contentfulEntry.image[0].title}
        />
        <h1>{data.contentfulEntry.heading}</h1>
        <img
          src={data.contentfulEntry.image[0].url}
          alt={data.contentfulEntry.image[0].title}
        />
      </div>
      <div className={style.venue_image}>
      <img className={style.venue_sub_image}
          src={data.contentfulEntry.image[2].url}
          alt={data.contentfulEntry.image[2].title}
        />
        <img className={style.venue_main_image}
          src={data.contentfulEntry.image[1].url}
          alt={data.contentfulEntry.image[1].title}
        />
        <img className={style.venue_sub_image}
          src={data.contentfulEntry.image[3].url}
          alt={data.contentfulEntry.image[3].title}
        />
      </div>
      <div className={style.venue_detail}>
        <h3>{data.contentfulEntry.subHeading}</h3>
        <p>{data.contentfulEntry.content.content}</p>
      </div>
    </div>
  );
}

export default Venue;
