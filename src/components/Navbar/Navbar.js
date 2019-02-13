import React from "react";

import "./styles.scss";
import CustomLink from "../CustomLink";

export const NavbarTemplate = ({ data }) => (
  <nav className="navbar">
    
    <div className="container navbar-container">
      <div className="site-brand">
        <a href="/" className="site-logo">
          <span>The Light Tree</span>
        </a>
      </div>
      {data.menuItems.length > 0 && (
        <ul className="navbar-menu">
          {data.menuItems.map(menuItem => (
            <li key={menuItem.linkURL} className="navbar-menuItem">
              <CustomLink
                linkType={menuItem.linkType}
                linkURL={menuItem.linkURL}
                className="navbar-menuLink"
              >
                {menuItem.label}
              </CustomLink>
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
);

const Navbar = props => {
  if (!props.data) {
    return null;
  }
  const data = props.data.edges[0].node.frontmatter;
  return <NavbarTemplate data={data} />;
};

export { Navbar };
