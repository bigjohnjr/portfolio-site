import React, { Component } from 'react';

class Services extends Component {
  render() {
    return (
      <section id="services" className="services">
        <div className="services__box">
          <div className="services__title">
            Services
          </div>
          <div className="row">
            <div className="col-xs-12 services__content">
              <div>
                <i className="fa fa-cog"></i>
                <h4 className="services__headline">Web Development</h4>
                <p>
                  John is a well-rounded developer whose main competencies include HTML5, CSS3, React, jQuery, SASS, and PHP. John has experience creating high traffic pages in a short amount of time to fulfill clients' deadlines.
                  He also is experienced building custom themes in Wordpress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Services;
