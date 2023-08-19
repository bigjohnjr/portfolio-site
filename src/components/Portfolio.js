import React, { Component } from "react";
import AmazonClone from "../images/amazon-clone-screenshot.jpg";
import Pokedex from "../images/pokedex-app.png";
import DAOU from "../images/daou-vineyards-screenshot.png";
// import AAA from "../images/aaarfg-screenshot.png";
// import Ameriplan from "../images/ameriplan-screenshot.png";
import Awolin from "../images/awolin-screenshot.png";
import MobsShoes from "../images/mobsdesign.png";
import CalendarApp from "../images/calendarapp.png";

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio" className="portfolio">
        <div className="portfolio__box">
          <div className="portfolio__title">React Portfolio</div>
          <div className="cf">
            <div className="portfolio__project">
              <h4 className="portfolio__name">Amazon Clone</h4>
              <div className="portfolio__img">
                <a
                  target="_blank"
                  href="https://clone-c058f.web.app/"
                  rel="noopener noreferrer"
                >
                  <img src={AmazonClone} alt="Amazon Clone screenshot" />
                </a>
              </div>
            </div>
            <div className="portfolio__project">
              <h4 className="portfolio__name">Pokedex App</h4>
              <div className="portfolio__img">
                <a
                  target="_blank"
                  href="https://velvety-fairy-1ac304.netlify.app/"
                  rel="noopener noreferrer"
                >
                  <img src={Pokedex} alt="Pokedex app screenshot" />
                </a>
              </div>
            </div>
            <div className="portfolio__project">
              <h4 className="portfolio__name">React Calendar App</h4>
              <div className="portfolio__img">
                <a
                  target="_blank"
                  href="http://bigjohnjr.github.io/calendar-app"
                  rel="noopener noreferrer"
                >
                  <img src={CalendarApp} alt="Calendar" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio__box">
          <div className="portfolio__title">Portfolio</div>
          <div className="cf">
            <div className="portfolio__project">
              <h4 className="portfolio__name">Andrew Wolin, M.D.</h4>
              <div className="portfolio__img">
                <a
                  target="_blank"
                  href="https://awolin.com/"
                  rel="noopener noreferrer"
                >
                  <img src={Awolin} alt="Andrew Wolin, M.D." />
                </a>
              </div>
            </div>
            <div className="portfolio__project">
              <h4 className="portfolio__name">DAOU Vineyards</h4>
              <div className="portfolio__img">
                <a
                  target="_blank"
                  href="https://daouvineyards.com/"
                  rel="noopener noreferrer"
                >
                  <img src={DAOU} alt="DAOU Vineyards website" />
                </a>
              </div>
            </div>
            {/* <div className="portfolio__project">
              <h4 className="portfolio__name">AAA Roofing</h4>
              <div className="portfolio__img">
                <a
                  target="_blank"
                  href="https://www.aaarfg.com/"
                  rel="noopener noreferrer"
                >
                  <img src={AAA} alt="AAA Roofing by Gene" />
                </a>
              </div>
            </div>
            <div className="portfolio__project">
              <h4 className="portfolio__name">Ameriplan</h4>
              <div className="portfolio__img">
                <a
                  target="_blank"
                  href="https://www.ameriplanusa.com/"
                  rel="noopener noreferrer"
                >
                  <img src={Ameriplan} alt="Ameriplan USA" />
                </a>
              </div>
            </div> */}
            <div className="portfolio__project">
              <h4 className="portfolio__name">MOBS Shoes</h4>
              <div className="portfolio__img">
                <a
                  target="_blank"
                  href="https://mobsdesign.com/"
                  rel="noopener noreferrer"
                >
                  <img src={MobsShoes} alt="Mobs Shoes" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
