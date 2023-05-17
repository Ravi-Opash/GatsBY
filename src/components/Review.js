import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import * as style from "../styles/Review.module.css";
import "../styles/global.css";

function Review() {
  const data = useStaticQuery(graphql`
    query ReviewPage {
      contentfulEntry(contentful_id: { eq: "1dl41yEOloUoBXcezl60i5" }) {
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
    <div className={style.container}>
      <div className={style.main_review}>
        <div className={style.review_image}>
          <img
            className={style.review_sub_image}
            src={data.contentfulEntry.image[0].url}
            alt={data.contentfulEntry.image[0].title}
          />
          <img
            className={style.review_main_image}
            src={data.contentfulEntry.image[1].url}
            alt={data.contentfulEntry.image[1].title}
          />
          <img
            className={style.review_sub_image}
            src={data.contentfulEntry.image[2].url}
            alt={data.contentfulEntry.image[2].title}
          />
        </div>
        <div className={style.review_info}>
          <div className={style.review_info_message}>
            <div className={style.bubble_box}></div>
            <h2>{data.contentfulEntry.content.content}</h2>
            <p>{data.contentfulEntry.subHeading}</p>
            <div className={style.quote_image}>
              <div className={style.review_box_line}></div>
              <img
                src={data.contentfulEntry.image[3].url}
                alt={data.contentfulEntry.image[3].title}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={style.btn_image}>
        <img
          src={data.contentfulEntry.image[4].url}
          alt={data.contentfulEntry.image[4].title}
        />
      </div>
    </div>
  );
}

export default Review;
