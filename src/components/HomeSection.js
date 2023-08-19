import React, { Component } from "react";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Experience from "./Experience";

class HomeSection extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="right">
          <section id="home" className="home">
            <div className="home__image">
              <div className="home__dark">
                <div className="home__description">FRONT END ENGINEER</div>
                <h4>With over 6 years of experience</h4>
              </div>
            </div>
          </section>
          <About />
          <Services />
          <div className="breaking-space"></div>
          <Portfolio />
          <div className="breaking-space"></div>
          <Experience />
        </div>
        <footer>
          <div className="footer__box">
            <p>Copyright &copy; 2023 | John White</p>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default HomeSection;
