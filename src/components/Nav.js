import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';

class Nav extends Component {
  constructor(props) {
      super(props);

      this.toggleClass = this.toggleClass.bind(this);
      this.state = {
        activeIndex: 0
      }
  }

  toggleClass(index, e) {
    this.setState({ activeIndex: index });
  };

  render() {
    return (
        <div className="sidebar__menu">
          <Scrollspy
            items={ ['home', 'about', 'services', 'portfolio', 'experience'] }
            currentClassName="active"
            >
            <li
              id="sidebar__home"
              className={this.state.activeIndex === 0 ? 'active' : null}
              onClick={this.toggleClass.bind(this, 0)}
              >
              <AnchorLink href="#home">
                Home
              </AnchorLink>
            </li>
            <li
              id="sidebar__about"
              className={this.state.activeIndex === 1 ? 'active' : null}
              onClick={this.toggleClass.bind(this, 1)}
              >
              <AnchorLink href="#about">
                About
              </AnchorLink>
            </li>
            <li
              id="sidebar__services"
              className={this.state.activeIndex === 2 ? 'active' : null}
              onClick={this.toggleClass.bind(this, 2)}
              >
              <AnchorLink href="#services">
                Services
              </AnchorLink>
            </li>
            <li
              id="sidebar__portfolio"
              className={this.state.activeIndex === 3 ? 'active' : null}
              onClick={this.toggleClass.bind(this, 3)}
              >
              <AnchorLink href="#portfolio">
                Portfolio
              </AnchorLink>
            </li>
            <li
              id="sidebar__exp"
              className={this.state.activeIndex === 4 ? 'active' : null}
              onClick={this.toggleClass.bind(this, 4)}
              >
              <AnchorLink href="#experience">
                Experience
              </AnchorLink>
            </li>
          </Scrollspy>
        </div>
    )
  }
}

export default Nav;
