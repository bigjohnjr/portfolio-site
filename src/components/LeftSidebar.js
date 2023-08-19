import React, { Component } from 'react';
import ReactLogo from '../logo.png';
import Nav from './Nav';

class LeftSidebar extends Component {
  constructor(props) {
      super(props);

      this.toggleShow = this.toggleShow.bind(this);
      this.state = {
        show: false,
      };
  }

  toggleShow() {
    const currentState = this.state.show;
    this.setState({ show: !currentState });
  };

  render() {
    return (
    <React.Fragment>
      <button
        className={this.state.show ? 'toggle-btn toggle-close' : 'toggle-btn'}
        onClick={this.toggleShow}
        >
          <span className="lines"></span>
      </button>
      <div
        className={this.state.show ? 'sidebar sidebar__box sidebar__box--left show-menu' : 'sidebar sidebar__box sidebar__box--left'}
        onClick={this.toggleShow}
        >
        <div className="sidebar__namebox cf">
          <span className="sidebar__image sidebar__image--left"></span>
          <span className="sidebar__name sidebar__name--left">John White</span>
        </div>
        <Nav />
        <div className="sidebar__react cf">
          <img className="sidebar__react-logo" src={ReactLogo} alt='React logo' />
          <h5 className="sidebar__react-text">This site was built in React JS.</h5>
        </div>
        <div className="sidebar__social cf">
          <ul className="sidebar__list">
            <li>
              <a href="https://www.linkedin.com/in/john-white-a1ab8bb8/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin left" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/bigjohnjr" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github left" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
    )
  }
}

export default LeftSidebar;
