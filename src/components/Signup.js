import React from "react";
import "../styles/global.css";
import { useStaticQuery, graphql } from "gatsby";
import * as style from "../styles/Signup.module.css";


function SignUp() {
  const data = useStaticQuery(graphql`
    query SignUpPAge {
      contentfulEntry(contentful_id: { eq: "2opdlMR2n1OEJGpxOFHI58" }) {
        ... on ContentfulHomePage {
          heading
          subHeading
          image {
            url
            title
          }
        }
      }
    }
  `);

  // console.log(data.contentfulEntry.image[0]);
  return (
      <div className={style.container}>
        <div className={style.bg_image}>
            <img src={data.contentfulEntry.image[0].url} alt={data.contentfulEntry.image[0].title} />
        </div>
        <div className={style.main_signup}>
          <h1>{data.contentfulEntry.subHeading}</h1>
          <button>Sign Up Now</button>
        </div>
      </div>
  );
}

export default SignUp;
