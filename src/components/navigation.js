import React, { Component } from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import { FaBars } from 'react-icons/fa';

//navigation display
export default class NavContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      scrollPosition: window.scrollTop,
      windowPosition: window.pageYOffset,
      mobileNavVisible: false,
      navClasses: classNames({'nav_container':true, 'nav_pinch':false})
    };
  }

  navigationLinks() {
    return [
      <ul onClick={this.handleNavClick.bind(this)} key={100}>
        <li key={200}><Link to="about">ABOUT</Link></li>
        <li key={202}><a href="http://blog.emeentsmedia.com" target="_blank">BLOG</a></li>
        <li key={203}><Link to="portfolio">PORTFOLIO</Link></li>
        <li key={205}><Link to="contact">CONTACT</Link></li>
      </ul>
    ];
  }

  handleResize() {
    this.setState({windowWidth: window.innerWidth});
  }

  handleScroll() {
    this.setState({windowPosition: window.pageYOffset});
    this.setState({scrollPosition: document.body.scrollTop});

    if(this.state.windowPosition >= 150) {
      this.setState({navClasses: classNames({'nav_container':true, 'nav_pinch':true})});
    } else {
      this.setState({navClasses: classNames({'nav_container':true, 'nav_pinch':false})});
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleNavClick() {
    if(!this.state.mobileNavVisible) {
      this.setState({mobileNavVisible: true});
    } else {
      this.setState({mobileNavVisible: false});
    }
  }

  renderMobileNav() {
    if(this.state.mobileNavVisible) {
      return this.navigationLinks();
    }
  }

  renderNavigation() {
    if(this.state.windowWidth <= 600) {
      return [
        <div key={101} className="mobile_nav">
          <p onClick={this.handleNavClick.bind(this)}><FaBars /></p>
          {this.renderMobileNav()}
        </div>
      ];
    } else {
      return [
        <div key={102} className="nav_menu">
          {this.navigationLinks()}
        </div>
      ];
    }
  }

  render() {
    return (
      <div key={103} className={this.state.navClasses}>
        <div key={200} id="navigation_bar">
          <div key={300} className="nav_title"><Link to="/">EMEENTS MEDIA</Link></div>
          {this.renderNavigation()}
        </div>
      </div>
    );
  }
}