import React, { Component } from "react";
import CentefieldImg from "../images/centerfield.png";
import FirmitiveImg from "../images/firmitive_logo.png";
import GrowthMedImg from "../images/growthmed-logo.jpg";
import ProveImg from "../images/prove-logo.png";
import IntellibrightImg from "../images/ib-icon.png";
import ResumePDF from "../docs/JohnWhite_Resume.pdf";

class Experience extends Component {
  render() {
    return (
      <section id="experience" className="exp">
        <div className="exp__box">
          <div className="exp__title">Resume</div>
          <div className="exp__company">
            <div className="exp__img growth">
              <img src={IntellibrightImg} alt="Intellibright" />
            </div>
            <div className="exp__content">
              <div className="cf">
                <h4 className="exp__name exp__name--left">
                  Intellibright (Lead Developer)
                </h4>
                <h4 className="exp__dates exp__dates--right">
                  October 2020 - Present
                </h4>
              </div>
              <p>
                Overseeing the development of approximately 20 client websites,
                and built from design to completion 6 client sites.
                Collaborating with the Digital Strategy team and SEO team for
                highly optimized sites that maximized goal completion, while
                improving page speed of sites from C’s and D’s on GTMetrix to
                A’s and B's on both desktop and mobile.
              </p>
            </div>
          </div>
          <div className="exp__company">
            <div className="exp__img growth">
              <img src={ProveImg} alt="Prove" />
            </div>
            <div className="exp__content">
              <div className="cf">
                <h4 className="exp__name exp__name--left">
                  Prove (Lead Developer)
                </h4>
                <h4 className="exp__dates exp__dates--right">
                  September 2018 - August 2020
                </h4>
              </div>
              <p>
                Architected and built sites using Craft CMS and WordPress, while
                also growing and customizing Shopify sites using liquid and
                Shopify Apps for clients. Mentored junior developers on HTML5,
                CSS3, and Bootstrap 4, and proper organization of CSS files.
              </p>
            </div>
          </div>
          <div className="exp__company">
            <div className="exp__img growth">
              <img src={GrowthMedImg} alt="GrowthMed" />
            </div>
            <div className="exp__content">
              <div className="cf">
                <h4 className="exp__name exp__name--left">
                  GrowthMed, Inc. (Front End Developer)
                </h4>
                <h4 className="exp__dates exp__dates--right">
                  July 2018 - September 2018
                </h4>
              </div>
              <p>
                Built responsive Wordpress sites using Bootstrap 3, CSS3, HTML5,
                jQuery and media queries. Formatted page layouts for better SEO
                rankings.
              </p>
            </div>
          </div>
          <div className="exp__company">
            <div className="exp__img">
              <img src={FirmitiveImg} alt="Firmitive" />
            </div>
            <div className="exp__content">
              <div className="cf">
                <h4 className="exp__name exp__name--left">
                  Firmitive Consulting (Front End Developer)
                </h4>
                <h4 className="exp__dates exp__dates--right">
                  December 2017 - July 2018
                </h4>
              </div>
              <p>
                Built reusable components and connected them to the Redux store.
                Integrated React-Bootstrap components to handle events for a
                responsive layout.
              </p>
            </div>
          </div>
          <div className="exp__company">
            <div className="exp__img">
              <img src={CentefieldImg} alt="Centerfield" />
            </div>
            <div className="exp__content">
              <div className="cf">
                <h4 className="exp__name exp__name--left">
                  Centerfield Corporation (Front End Developer)
                </h4>
                <h4 className="exp__dates exp__dates--right">
                  August 2016 - January 2018
                </h4>
              </div>
              <p>
                Built custom Wordpress themes for a variety of clients. Used
                SASS and grunt.js to compile scss and minify css and js files.
                Used optimization techniques to faster loading speeds, including
                Critical CSS and Lazyload for images.
              </p>
            </div>
          </div>
          <div className="exp__resume">
            View full resume{" "}
            <a href={ResumePDF} target="_blank" rel="noopener noreferrer">
              here
            </a>
            .
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
