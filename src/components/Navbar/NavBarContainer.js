import React, { Component } from "react";

import "./styles.scss";
import CustomLink from "../CustomLink";
import AnchorLink from 'react-anchor-link-smooth-scroll';

export class NavbarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuState: false,
      pageUrl: ''
    }
  }

  componentDidMount(){
    if (typeof window !== undefined) {
      this.setState({
        pageUrl: window.location.pathname 
      });
    }
  }

  handleShowMenu(event) {
    event.preventDefault();
    this.setState({
      menuState: this.state.menuState === false,
    });
  }

  render() {
    const data = this.props.data;

    const menuClass = this.state.menuState ? 'open' : 'close';
    const activeState = menuClass === 'open' ? 'active' : 'inactive';

    

    return (
      <header className="site-header">  
        <div className="container navbar-container">
      <nav className="navbar">
        <div className="site-brand">
        <CustomLink 
          linkURL="/" 
          linkType="internal" 
          className="site-logo"
        >
          <span>The Light Tree</span>
        </CustomLink>
        </div>
          <a 
          href="/" 
          className={`navbar-btn ${activeState} `}
          onClick={e => this.handleShowMenu(e)}
          >
          <span/>
        </a>
        <div className={`navbar-wrapper ${menuClass}`}>
          {data.menuItems.length > 0 && (
            <ul className="navbar-menu">
              {data.menuItems.map(menuItem => (
                <li key={menuItem.linkURL} className="navbar-menuItem">
                  { 
                  this.state.pageUrl !== '/' ?
                    <CustomLink  
                      linkURL={menuItem.linkURL} 
                      linkType="internal"
                      className="navbar-menuLink"
                    >
                      {menuItem.label}
                    </CustomLink>
                    :
                    <AnchorLink href={menuItem.linkURL} className="navbar-menuLink">
                      {menuItem.label}
                    </AnchorLink>
                  }   
                </li>
              ))}
            </ul>
          )}
          { data.socialLinks.length > 0 && (
            <ul className="social-icons">
              {data.socialLinks.map(socialitems => (
                <li key={socialitems.linkURL} className="social-icons--item">
                  <a 
                    href={socialitems.linkURL}
                    aria-label={socialitems.label}
                    className="icon-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={`icon icon-${socialitems.type} `} />
                    <span>{socialitems.hiddenText}</span>
                  </a>
                </li>
              ))}
            </ul>
            )
          }
        </div>
      </nav>
    </div>
      </header>
    );
  }
}
