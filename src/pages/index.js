import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import AnchorLink from 'react-anchor-link-smooth-scroll';

import CustomLink from "../components/CustomLink";

import Layout from "../components/Layout";
import "../styles/home.scss";

export const HomePageTemplate = ({ home }) => {
  return (
    <>
      <section className="hero-banner">
        <ul>
          <li>{home.mainImageText.itemTextOne}</li>
          <li>{home.mainImageText.itemTextTwo}</li>
          <li>{home.mainImageText.itemTextThree}</li>
          <li>{home.mainImageText.itemTextFour}</li>
        </ul>
        <AnchorLink href="/#intro" className="down-link">
          <span>Introduction</span>
        </AnchorLink>
      </section>
      <section id="intro" className="section-block section-block--introduction">
        <div className="container">
          <h1 className="section-title">{home.sectionWelcome.title}</h1>
          <div className="container-row">
            <div className="block block-profile">
              <img src={home.sectionWelcome.image} alt={home.sectionWelcome.imageAlt} className="profile" />
            </div>
            <div className="block block-context">
              <p>{home.sectionWelcome.body}</p>
            </div>
            <blockquote className="quote">{home.sectionWelcome.quote}</blockquote>
          </div>
          <CustomLink
            linkType="internal"
            linkURL="/about"
            className="link link-btn"
          >
            About Yoga
          </CustomLink>
        </div>
      </section>
      <section id="schedule" className="section-block section-block--schedule">
       <div className="container">
          <h2 className="section-title">{home.sectionSchedule.title}</h2>
          <h3>{home.sectionSchedule.classesTimetable.subHeading}</h3>
          <div>
            <div dangerouslySetInnerHTML={{ __html: home.sectionSchedule.classesTimetable.body}} />
          </div>
          <CustomLink
            linkType="internal"
            linkURL="/classes"
            className="link link-btn"
          >
            WHAT CAN YOU EXPECT FROM MY CLASSES?
          </CustomLink>
        </div>
      </section>
      <section id="mystory" className="section-block section-block--mystory">
        <div className="container">
          <h2 className="section-title">My Story</h2>
            <p>I have been a practitioner of Yoga since 2002 and began teaching Yoga in since 2015.</p> 
            <p>I discovered Yoga in a time of transition while I was ending a 9 year relationship and I was looking for some respite, solace and ‘me’ time.</p>
            <p>At the end of my first class I felt amazing, so I went back for another and another.  I discovered that through simply spending a regular 90 minutes with myself focused on breathing, moving and becoming still I began to become closer to myself, feel better about myself and in my body. I also started to become aware of some of my limiting beliefs that were preventing me from moving forward that showed up in my practice. My practice mat was like a mirror! I was awoken to the fact that I had not been looking after myself and this had led me to become disconnected, have a lack of clarity of who I was, what I wanted or how to move forward.</p>
            <p>I had a realisation that putting myself first was necessary to my physical, mental, emotional and spiritual health. Self-care was not selfish but was in fact unselfish. By looking after my own needs I was able to be healthier and happier, have a more positive and productive approach to my life and contribute more to the lives of those in my life, particularly my son who was only 6 at the time.</p>
            <p>My life began to move forward. Putting my Yoga into action took some focus, practice and some breaks to remind how much better I felt when I returned, it took some time. Over the years I explored different styles Bikram Hot Yoga, Vinyasa Flow, Ashtanga, Iyengar, Scaravelli, my understanding deepened and my practice developed.</p>
            <p>In 2015 I took the opportunity for voluntary redundancy from my pretty intense corporate marketing job. Although I had achieved my goal of a successful marketing career it had become my entire focus and measurement of success, it had taken over and again I had become disconnected. I took the blessing and lesson offered and grabbed the opportunity for a new start and to begin to create a life that better served mySelf.</p>
            <ul className="section-image-group">
              <li><img src="/img/incense_burning.jpg"  alt="" /></li>
              <li><img src="/img/candle_light.jpg" alt="" /></li>
              <li><img src="/img/candle_light_02.jpg" alt="" /></li>
              <li><img src="/img/lighting_candle.jpg" alt="" /></li>
            </ul>
            <p>I was blessed to be able to spend time in an ashram with Samyak Yoga School in Mysore, India training to become a teacher in the Ashtanga Yoga lineage. This was the first step on my journey as a teacher and I have continued to train to expand my teaching in Vinyasa Flow, Yin, Restorative and Pregnancy Yoga and will continue to learn, develop my own practice which I share through my teaching.</p>
            <p>I now realise that, on many occasions in my past, life had been attempting to ‘wake me up’ to mySelf, to connect me, in a more intuitive way, to the innate ability [that we all share] to create my life in my vision.</p>
            
            <p className="quote">
              Have you been ignoring or missing out on Life’s attempts to wake you up to your true self?
            </p>
            <CustomLink
            linkType="internal"
            linkURL="/teaching"
            className="link link-btn"
          >
            THE LIGHT TREE TEACHING PHILOSOPHY
          </CustomLink>
        </div>
      </section>
      <section id="connect" className="section-block section-block--connect">
        <div className="container">
          <h2 className="section-title">Connect with me</h2>
          <ul className="contact-list">
            <li>
              <a href="/">
                <span className="contact-label">Email</span>
                <span className="contact-link-name">jess@thelighttreeyoga.co.uk</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span className="contact-label">Phone</span>
                <span className="contact-link-name">07927 318 065</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span className="contact-label">Follow me on </span>
                <span className="contact-link-name">Instagram</span>
              </a>
            </li>
          </ul>
          <div className="container-row">
            <div className="block connect-service">
              <h3>SERVICES – WHAT I OFFER</h3>
              <p><strong>Group Yoga</strong> – Public classes are listed in the schedule section. It is also possible to book private group classes.</p>
              <p><strong>Private Yoga</strong> – I offer private 1-2- sessions at your home or at my home studio.</p>
              <p><strong>Workplace</strong> – I deliver classes for organisations and their employees which can be on a regular basis or as a one off workshop or event.</p>
              <p><strong>Workshops and events</strong> - I run workshops at studios and events at different venues. Check out the schedule section for upcoming workshops and events or follow me on Instagram.</p>
              <p><strong>Outreach</strong> – I am passionate about all people having access the benefits of a Yoga practice. I offer a reduced rate or FOC regular class to one charitable organisation for their service users. Contact me to find out more</p>
            </div>
            <div className="block connect-links">
              <h3>SOULSHALL MATA</h3>
              <p>Link to mixcloud once set up A monthly talk show going beneath the physical matter to the soul of what matters. 
              Hosted by Jess Gibbs and Shaka Lish with guests. The show is centred around wellbeing, 
              including chat and music discussing topics concerning the African diaspora from the female black British perspective.</p>
              <p>CLASS PLAYLISTS - Soundcloud link</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

class HomePage extends React.Component {
  render() {
    const { data } = this.props;
    const {
      data: { footerData, navbarData },
    } = this.props;
    const { frontmatter: home } = data.homePageData.edges[0].node;
    const {
      seo: { title: seoTitle, description: seoDescription, browserTitle },
    } = home;

    return (
      <Layout footerData={footerData} navbarData={navbarData}>
        <Helmet>
          <meta name="title" content={seoTitle} />
          <meta name="description" content={seoDescription} />
          <title>{browserTitle}</title>
        </Helmet>
        <HomePageTemplate home={home} />
      </Layout>
    );
  }
}

HomePage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default HomePage;

export const pageQuery = graphql`
  query HomePageQuery {
    allMarkdownRemark(
      filter: { frontmatter: { presenters: { elemMatch: { text: { ne: null } } } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          frontmatter {
            formattedDate: date(formatString: "MMMM Do YYYY @ h:mm A")
          }
        }
      }
    }
    ...LayoutFragment
    homePageData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "home-page" } } }) {
      edges {
        node {
          frontmatter {
            mainImageText {
              itemTextOne
              itemTextTwo
              itemTextThree
              itemTextFour
            }
            sectionWelcome {
              title
              body
              quote
              image
              imageAlt
            }
            sectionSchedule {
              title
              classesTimetable {
                subHeading
                body
              }
              workshopSchedule {
                subHeading
                body
              }
              eventSchedule {
                subHeading
                body
              }
            }
            seo {
              browserTitle
              title
              description
            }
          }
        }
      }
    }
  }
`;
