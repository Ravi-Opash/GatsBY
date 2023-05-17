import React, { useState } from "react";
import "../styles/global.css";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import * as style from "../styles/Footer.module.css";

const Footer = () => {
  const [location, setLocation] = useState(false);
  const [company, setCompany] = useState(false);
  const [link, setLink] = useState(false);
  const data = useStaticQuery(graphql`
    query FooterPage {
      contentfulEntry(contentful_id: { eq: "6TzJD8rRg9gX0ls39vqADh" }) {
        ... on ContentfulHomePage {
          heading
          subHeading
          data {
            address
            email
            phone_number
            telePhone
          }
          image {
            title
            url
          }
        }
      }
    }
  `);

  const onLocationArrowUP = () => {
    setLocation(false);
  };
  const onLocationArrowDown = () => {
    setLocation(true);
  };
  const onCompanyArrowUp = () => {
    setCompany(false);
  };
  const onCompanyArrowDown = () => {
    setCompany(true);
  };
  const onLinkArrowUp = () => {
    setLink(false);
  };
  const onLinkArrowDown = () => {
    setLink(true);
  };

  console.log(link);

  return (
    <footer>
      <div className={style.container}>
        <div className={style.logo}>
          <div className={style.logo_box}>
            <img
              className={style.footer_logo}
              src={data.contentfulEntry.image[0].url}
              alt={data.contentfulEntry.image[0].title}
            />
          </div>
        </div>
        <div className={style.location}>
          <h4>
            {data.contentfulEntry.subHeading}{" "}
            <span>
              <img
                className={
                  location
                    ? style.location_footer_arrowUp_changed
                    : style.location_footer_arrowUp
                }
                src={data.contentfulEntry.image[6].url}
                alt={data.contentfulEntry.image[6].title}
                onClick={onLocationArrowUP}
              />
              <img
                className={
                  location
                    ? style.location_footer_arrowDown_changed
                    : style.location_footer_arrowDown
                }
                src={data.contentfulEntry.image[7].url}
                alt={data.contentfulEntry.image[7].title}
                onClick={onLocationArrowDown}
              />
            </span>
          </h4>
          <div
            className={
              location ? style.location_data_changed : style.location_data
            }
          >
            <div className={style.location_box}>
              <div className={style.loaction_img}>
                <img
                  className={style.footer_location}
                  src={data.contentfulEntry.image[1].url}
                  alt={data.contentfulEntry.image[1].title}
                />
              </div>
              <div className={style.location_text}>
                {data.contentfulEntry.data.address}
              </div>
            </div>
            <div className={style.location_box}>
              <div className={style.loaction_img}>
                <img
                  className={style.footer_location}
                  src={data.contentfulEntry.image[2].url}
                  alt={data.contentfulEntry.image[2].title}
                />
              </div>
              <div className={style.location_text}>
                {data.contentfulEntry.data.phone_number}
              </div>
            </div>
            <div className={style.location_box}>
              <div className={style.loaction_img}>
                <img
                  className={style.footer_location}
                  src={data.contentfulEntry.image[3].url}
                  alt={data.contentfulEntry.image[3].title}
                />
              </div>
              <div className={style.location_text}>
                {data.contentfulEntry.data.email}
              </div>
            </div>
            <div className={style.location_box}>
              <div className={style.loaction_img}>
                <img
                  className={style.footer_location}
                  src={data.contentfulEntry.image[4].url}
                  alt={data.contentfulEntry.image[4].title}
                />
              </div>
              <div className={style.location_text}>
                {data.contentfulEntry.data.telePhone}
              </div>
            </div>
          </div>
        </div>
        <div className={style.company}>
          <h4>
            Company{" "}
            <span>
              <img
                className={
                  company
                    ? style.company_footer_arrowUp_changed
                    : style.company_footer_arrowUp
                }
                src={data.contentfulEntry.image[6].url}
                alt={data.contentfulEntry.image[6].title}
                onClick={onCompanyArrowUp}
              />
              <img
                className={
                  company
                    ? style.company_footer_arrowDown_changed
                    : style.company_footer_arrowDown
                }
                src={data.contentfulEntry.image[7].url}
                alt={data.contentfulEntry.image[7].title}
                onClick={onCompanyArrowDown}
              />
            </span>
          </h4>
          <ul
            className={
              company ? style.company_list_changed : style.company_data
            }
          >
            <li>
              <img
                className={style.footer_location}
                src={data.contentfulEntry.image[5].url}
                alt={data.contentfulEntry.image[5].title}
              />
              <Link>Home</Link>
            </li>
            <li>
              <img
                className={style.footer_location}
                src={data.contentfulEntry.image[5].url}
                alt={data.contentfulEntry.image[5].title}
              />
              <Link>Preferred Partners</Link>
            </li>
            <li>
              <img
                className={style.footer_location}
                src={data.contentfulEntry.image[5].url}
                alt={data.contentfulEntry.image[5].title}
              />
              <Link>Our Family</Link>
            </li>
            <li>
              <img
                className={style.footer_location}
                src={data.contentfulEntry.image[5].url}
                alt={data.contentfulEntry.image[5].title}
              />
              <Link>Events</Link>
            </li>
            <li>
              <img
                className={style.footer_location}
                src={data.contentfulEntry.image[5].url}
                alt={data.contentfulEntry.image[5].title}
              />
              <Link>Blog</Link>
            </li>
            <li>
              <img
                className={style.footer_location}
                src={data.contentfulEntry.image[5].url}
                alt={data.contentfulEntry.image[5].title}
              />
              <Link>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className={style.quick_link}>
          <h4>
            Quick Link{" "}
            <span>
              <img
                className={
                  link
                    ? style.quick_link_footer_arrowUp_changed
                    : style.quick_link_footer_arrowUp
                }
                src={data.contentfulEntry.image[6].url}
                alt={data.contentfulEntry.image[6].title}
                onClick={onLinkArrowUp}
              />
              <img
                className={
                  link
                    ? style.quick_link_footer_arrowDown_changed
                    : style.quick_link_footer_arrowDown
                }
                src={data.contentfulEntry.image[7].url}
                alt={data.contentfulEntry.image[7].title}
                onClick={onLinkArrowDown}
              />
            </span>
          </h4>
          <ul
            className={
              link ? style.quick_link_list_changed : style.quick_link_data
            }
          >
            <li>
              <img
                className={style.footer_location}
                src={data.contentfulEntry.image[5].url}
                alt={data.contentfulEntry.image[5].title}
              />
              <Link>Our Venues</Link>
            </li>
            <li>
              <img
                className={style.footer_location}
                src={data.contentfulEntry.image[5].url}
                alt={data.contentfulEntry.image[5].title}
              />
              <Link>Barn On Bridge</Link>
            </li>
            <li>
              <img
                className={style.footer_location}
                src={data.contentfulEntry.image[5].url}
                alt={data.contentfulEntry.image[5].title}
              />
              <Link>The Philander Chase Knox Estate</Link>
            </li>
            <li>
              <img
                className={style.footer_location}
                src={data.contentfulEntry.image[5].url}
                alt={data.contentfulEntry.image[5].title}
              />
              <Link>The High Point</Link>
            </li>
            <li>
              <img
                className={style.footer_location}
                src={data.contentfulEntry.image[5].url}
                alt={data.contentfulEntry.image[5].title}
              />
              <Link>Off Premise Catering</Link>
            </li>
            <li>
              <img
                className={style.footer_location}
                src={data.contentfulEntry.image[5].url}
                alt={data.contentfulEntry.image[5].title}
              />
              <Link>At Home / Your Location</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.bottom_footer}>
        <p>© 2021 Robert Ryan Catering & Design</p>
      </div>
    </footer>
  );
};

export default Footer;
