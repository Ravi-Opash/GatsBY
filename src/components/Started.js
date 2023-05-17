import React from "react";
import "../styles/global.css";
import { useStaticQuery, graphql } from "gatsby";
import * as style from "../styles/Started.module.css";
import { useRef } from "react";

function Started(props) {

  const ref = useRef(null);
  props.passRef(ref);

  // console.log(ref, 'ref');

  const data = useStaticQuery(graphql`
    query StartedPage {
      contentfulEntry(contentful_id: { eq: "1OAnJpFwTuMxvDLpirK56T" }) {
        ... on ContentfulHomePage {
          heading
          subHeading
          content {
            content
          }
        }
      }
    }
  `);

  // console.log(data.contentfulEntry.content.content.split(', '));
  const checkBox_vlaue = data.contentfulEntry.content.content.split(", ");

  return (
    <div ref={ref} className={style.container}>
      <div className={style.main_box}>
        <h1>{data.contentfulEntry.heading}</h1>
        <p>{data.contentfulEntry.subHeading}</p>
        <form>
          <div className={style.form_box}>
            <div className={style.form_subBox}>
              <label>First Name*</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
              />
            </div>
            <div className={style.form_subBox}>
              <label>Last Name*</label>
              <input
                type="text"
                name="lasttName"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div className={style.form_box}>
            <div className={style.form_subBox}>
              <label>Email*</label>
              <input
                type="text"
                name="email"
                placeholder="Enter your email address"
              />
            </div>
            <div className={style.form_subBox}>
              <label>Phone Number*</label>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Enter your phone numnber"
              />
            </div>
          </div>
          <div className={style.form_box}>
            <div className={style.form_subBox}>
              <label>Type Of Event*</label>
              <select>
                <option value="wedding">Wedding</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className={style.form_subBox}>
              <label>date Of Evnet*</label>
              <input type="date" name="date" />
            </div>
          </div>
          <div className={style.form_box}>
            <div className={style.form_subBox}>
              <label>If "Other", Please Describe Venue</label>
              <select>
                <option value="wedding">Wedding</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className={style.form_subBox}>
              <label>Venue In Mind?**</label>
              <select>
                <option value="pHome">Priveth home</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className={style.checkBox_label}>
            <label>How Did You Hear About Us?*</label>
          </div>
          <div className={style.main_checkBox}>
            {checkBox_vlaue.map((item) => (
              <div className={style.sub_checkBox}>
                <input type="checkbox" name={item} value={item} />
                <label>{item}</label>
              </div>
            ))}
          </div>

          <div className={style.textArea_box}>
            <label>
              Your questions, thoughts, and things you would like us to know*
            </label>
            <textarea
              name="textArea"
              id=""
              rows="7"
              placeholder="Your questions, thoughts, and things you would like us to know"
            ></textarea>
          </div>

          <input
            type="checkbox"
            name={"inform"}
            value={"inform"}
            defaultChecked
            className={style.inform}
          />
          <label>
            Please keep me updated on new offers and recipes through your
            monthly newsletter.
          </label>

          <div className={style.form_send}>
            <button>Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Started;
