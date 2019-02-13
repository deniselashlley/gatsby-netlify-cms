import React from "react";
import "./styles.scss";

export const FooterTemplate = ({ data }) => {
  const { logoImage, copyrightText} = data;
  let year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="footer">
      <div className="container">
        <p className="copy-text">Copyright &copy; {year} {copyrightText}</p>
        <p className="member-logo">
          <span>{logoImage.imageAlt}</span>
            <a 
              href={logoImage.imageLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={logoImage.image}
                alt={logoImage.imageAlt}
                title={logoImage.imageAlt}
              />
              
            </a> 
          </p>
          { /*socialLinks.length > 0 && (
            <ul className="footer-socialMenu">
              {socialLinks.map(socialLink => (
                <li key={socialLink.linkURL} className="footer-socialMenuItem">
                  <a
                    className="footer-socialLink"
                    href={socialLink.linkURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="footer-socialLinkIcon"
                      src={socialLink.image}
                      alt={socialLink.imageAlt}
                    />
                    {socialLink.label}
                  </a>
                </li>
              ))}
            </ul>
              )*/}
        </div>
    </footer>
  );
};

const Footer = props => {
  if (!props.data) {
    return null;
  }
  const data = props.data.edges[0].node.frontmatter;
  return <FooterTemplate data={data} />;
};

export { Footer };
