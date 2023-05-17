import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import * as style from "../styles/Blogs.module.css";
import "../styles/global.css";

function Blogs() {
  const data = useStaticQuery(graphql`
    query BlogsPage {
      contentfulEntry(contentful_id: { eq: "2i0nUCZvHXR6cFsYrcI4Bw" }) {
        ... on ContentfulHomePage {
          heading
          subHeading
          image {
            url
            title
          }
          content {
            content
          }
        }
      }
    }
  `);

  const content = data.contentfulEntry.content.content.split(" | ");
  const subHeading = data.contentfulEntry.subHeading.split(" | ");
  // console.log(subHeading);

  return (
    <div className={style.container}>
      <div className={style.main_blog}>
        <div className={style.main_blog_header}>
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
        <div className={style.blog_main_box}>
          <div className={style.blog}>
            <div className={style.blog_main_image}>
              <img
                className={style.blog_image}
                src={data.contentfulEntry.image[4].url}
                alt={data.contentfulEntry.image[4].title}
              />
              <div className={style.blog_date}>
                <img
                  className={style.date_p1}
                  src={data.contentfulEntry.image[2].url}
                  alt={data.contentfulEntry.image[2].title}
                />
                <img
                  className={style.date_image}
                  src={data.contentfulEntry.image[1].url}
                  alt={data.contentfulEntry.image[1].title}
                />
                <img
                  className={style.date_p2}
                  src={data.contentfulEntry.image[3].url}
                  alt={data.contentfulEntry.image[3].title}
                />
                <div className={style.text_date}>
                  <h3>08</h3>
                  <p>April</p>
                </div>
              </div>
            </div>
            <h4>{subHeading[0]}</h4>
            <p>{content[0]}</p>
            <button>Read More</button>
          </div>
          <div className={style.blog}>
            <div className={style.blog_main_image}>
              <img
                className={style.blog_image}
                src={data.contentfulEntry.image[5].url}
                alt={data.contentfulEntry.image[5].title}
              />
              <div className={style.blog_date}>
                <img
                  className={style.date_p1}
                  src={data.contentfulEntry.image[2].url}
                  alt={data.contentfulEntry.image[2].title}
                />
                <img
                  className={style.date_image}
                  src={data.contentfulEntry.image[1].url}
                  alt={data.contentfulEntry.image[1].title}
                />
                <img
                  className={style.date_p2}
                  src={data.contentfulEntry.image[3].url}
                  alt={data.contentfulEntry.image[3].title}
                />
                <div className={style.text_date}>
                  <h3>16</h3>
                  <p>April</p>
                </div>
              </div>
            </div>
            <h4>{subHeading[1]}</h4>
            <p>{content[1]}</p>
            <button>Read More</button>
          </div>
          <div className={style.blog}>
            <div className={style.blog_main_image}>
              <img
                className={style.blog_image}
                src={data.contentfulEntry.image[6].url}
                alt={data.contentfulEntry.image[6].title}
              />
              <div className={style.blog_date}>
                <img
                  className={style.date_p1}
                  src={data.contentfulEntry.image[2].url}
                  alt={data.contentfulEntry.image[2].title}
                />
                <img
                  className={style.date_image}
                  src={data.contentfulEntry.image[1].url}
                  alt={data.contentfulEntry.image[1].title}
                />
                <img
                  className={style.date_p2}
                  src={data.contentfulEntry.image[3].url}
                  alt={data.contentfulEntry.image[3].title}
                />
                <div className={style.text_date}>
                  <h3>20</h3>
                  <p>April</p>
                </div>
              </div>
            </div>

            <h4>{subHeading[2]}</h4>
            <p>{content[2]}</p>
            <button>Read More</button>
          </div>
        </div>
        <div className={style.show_more_btn}>
          <button>Show More</button>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
