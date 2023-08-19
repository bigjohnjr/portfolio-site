import React, { Component } from 'react';
import AboutImg from '../images/about__img.jpg';

class About extends Component {
  render() {
    return (
      <section id="about" className="about">
        <div className="about__box">
          <div className="about__title">
            About
          </div>
          <div className="row about__content">
            <div className="col-xs-12 col-lg-6 about__img">
              <img src={AboutImg} alt="" />
            </div>
            <div className="col-xs-12 col-lg-6 about__text about__text--right">
              <div className="about__text-title">
                Front End Engineer
              </div>
              <div className="about__name">
                John White
              </div>
              <div className="about__blurb">
                John is a Front End Engineer in Austin, TX with over 6 years experience.
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About;
