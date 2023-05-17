import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import * as style from "../styles/Services.module.css";
import "../styles/global.css";

export default function Services() {
  const intro = useStaticQuery(graphql`
    query ServicePage {
      contentfulEntry(contentful_id: { eq: "1I0ImWZtPisybJUU2iTEvc" }) {
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

  // console.log(intro.contentfulEntry);

  const list = intro.contentfulEntry.subHeading.split(",");
  // console.log(list);

  return (
    <div className={style.container}>
      <div className={style.services}>
        <div className={style.services_left}>
          <div className={style.main_img}>
            <div className={style.top_imgs}>
              <div className={style.sub_img}>
                <img
                  src={intro.contentfulEntry.image[1].url}
                  alt={intro.contentfulEntry.image[1].title}
                />
              </div>
              <div className={style.sub_img}>
                <img
                  src={intro.contentfulEntry.image[2].url}
                  alt={intro.contentfulEntry.image[2].title}
                />
              </div>
            </div>
            <div className={style.botom_imgs}>
              <div className={style.sub_img}>
                <img
                  src={intro.contentfulEntry.image[0].url}
                  alt={intro.contentfulEntry.image[0].title}
                />
              </div>
              <div className={style.sub_img}>
                <img
                  src={intro.contentfulEntry.image[3].url}
                  alt={intro.contentfulEntry.image[3].title}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={style.main_content}>
          <div className={style.head}>
            <img
              src={intro.contentfulEntry.image[4].url}
              alt={intro.contentfulEntry.image[4].title}
            />
            <h1>{intro.contentfulEntry.heading}</h1>
            <img
              src={intro.contentfulEntry.image[4].url}
              alt={intro.contentfulEntry.image[4].title}
            />
          </div>
          <div className={style.content}>
            <p>{intro.contentfulEntry.content.content}</p>
          </div>
          <div className={style.lists}>
            <ul>
              {list.map((item) => (
                <li>
                  <img
                    src={intro.contentfulEntry.image[5].url}
                    alt={intro.contentfulEntry.image[5].title}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
