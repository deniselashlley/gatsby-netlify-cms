import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import isAfter from "date-fns/is_after";
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Layout from "../components/Layout";
// import Map from "../components/Map";
// import HeadshotPlaceholder from "../img/headshot-placeholder.svg";
// import CustomLink from "../components/CustomLink";
import "../styles/home.scss";

export const HomePageTemplate = ({ home, upcomingMeetup = null }) => {
  const presenters = upcomingMeetup && upcomingMeetup.presenters;
  const latitude = upcomingMeetup && parseFloat(upcomingMeetup.location.mapsLatitude);
  const longitude = upcomingMeetup && parseFloat(upcomingMeetup.location.mapsLongitude);
  return (
    <>
      <section className="hero-banner">
        <ul>
          <li>{home.homeBanner.itemText1}</li>
          <li>{home.homeBanner.itemText2}</li>
          <li>{home.homeBanner.itemText3}</li>
          <li>{home.homeBanner.itemText4}</li>
        </ul>
        <AnchorLink href="#intro" className="down-link">
          <span>Introduction</span>
        </AnchorLink>
      </section>
      <section id="intro" className="section-block section-block--introduction">
        <div className="container">
          <h1>{home.sectionWelcome.title}</h1>
          <div className="container-row">
            <div className="block block-profile">
              <img src={home.sectionWelcome.contentText.image} alt="" className="profile" />
            </div>
            <div className="block block-context">
              <p>{home.sectionWelcome.contentText.paraText1}</p>
              <p>{home.sectionWelcome.contentText.paraText2}</p>
              <p>{home.sectionWelcome.contentText.paraText3}</p>
              <p>{home.sectionWelcome.contentText.paraText4}</p>
            </div>
            <blockquote className="quote">{home.sectionWelcome.contentText.quote}</blockquote>
          </div>
        </div>
      </section>
      <section id="schedule" className="section-block section-block--schedule">
       <div className="container">
          <h2>{home.schedule.title}</h2>
          <h3>{home.schedule.classesBlock.heading}</h3>
          <div>
            <div dangerouslySetInnerHTML={{ __html: home.schedule.classesBlock.classes }} />
          </div>
        </div>
      </section>
      {/* 
      <section className="upcomingMeetup section">
        <div className="upcomingMeetup-container  container">
          <h2 className="upcomingMeetup-title">{home.upcomingMeetupHeading}</h2>
          {upcomingMeetup ? (
            <>
              <p className="upcomingMeetup-detail  upcomingMeetup-detail--date">
                <span className="upcomingMeetup-detailLabel">Date: </span>
                {upcomingMeetup.formattedDate}
              </p>
              <p className="upcomingMeetup-detail  upcomingMeetup-detail--location">
                <span className="upcomingMeetup-detailLabel">Location: </span>
                {upcomingMeetup.location.name}
              </p>
              {presenters.length > 0 && (
                <div className="upcomingMeetup-presenters">
                  {presenters.map(presenter => (
                    <div className="upcomingMeetup-presenter" key={presenter.text}>
                      <img
                        className="upcomingMeetup-presenterImage"
                        src={presenter.image ? presenter.image : HeadshotPlaceholder}
                        alt={presenter.image ? presenter.name : "Default headshot placeholder"}
                      />
                      <span className="upcomingMeetup-presenterName">{presenter.name}</span>
                      <span className="upcomingMeetup-presenterPresentationTitle">
                        {presenter.presentationTitle}
                      </span>
                      <p className="upcomingMeetup-presenterDescription">{presenter.text}</p>
                    </div>
                  ))}
                </div>
              )}
              <p className="upcomingMeetup-mapNote">{home.mapsNote}</p>
              <div className="upcomingMeetup-mapWrapper">
                <Map
                  isMarkerShown
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBTxauB_VWpo0_8hWELlE3pN59uuHzxD-8&v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `100%` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                  link={upcomingMeetup.location.mapsLink}
                  latitude={latitude}
                  longitude={longitude}
                />
              </div>
            </>
          ) : (
            <p className="upcomingMeetup-detail">{home.noUpcomingMeetupText}</p>
          )}
        </div>
          </section> 
      */}
      
      <section id="mystory" className="section-block section-block--mystory">
        <h2>My Story</h2>
        <p>I have been a practitioner of Yoga since 2002 and began teaching Yoga in since 2015.</p> 
        <p>I discovered Yoga in a time of transition while I was ending a 9 year relationship and I was looking for some respite, solace and ‘me’ time.</p>
        <p>At the end of my first class I felt amazing, so I went back for another and another.  I discovered that through simply spending a regular 90 minutes with myself focused on breathing, moving and becoming still I began to become closer to myself, feel better about myself and in my body. I also started to become aware of some of my limiting beliefs that were preventing me from moving forward that showed up in my practice. My practice mat was like a mirror! I was awoken to the fact that I had not been looking after myself and this had led me to become disconnected, have a lack of clarity of who I was, what I wanted or how to move forward.</p>
        <p>I had a realisation that putting myself first was necessary to my physical, mental, emotional and spiritual health. Self-care was not selfish but was in fact unselfish. By looking after my own needs I was able to be healthier and happier, have a more positive and productive approach to my life and contribute more to the lives of those in my life, particularly my son who was only 6 at the time.</p>
        <p>My life began to move forward. Putting my Yoga into action took some focus, practice and some breaks to remind how much better I felt when I returned, it took some time. Over the years I explored different styles Bikram Hot Yoga, Vinyasa Flow, Ashtanga, Iyengar, Scaravelli, my understanding deepened and my practice developed.</p>
        <p>In 2015 I took the opportunity for voluntary redundancy from my pretty intense corporate marketing job. Although I had achieved my goal of a successful marketing career it had become my entire focus and measurement of success, it had taken over and again I had become disconnected. I took the blessing and lesson offered and grabbed the opportunity for a new start and to begin to create a life that better served mySelf.</p>
        <p>I was blessed to be able to spend time in an ashram with Samyak Yoga School in Mysore, India training to become a teacher in the Ashtanga Yoga lineage. This was the first step on my journey as a teacher and I have continued to train to expand my teaching in Vinyasa Flow, Yin, Restorative and Pregnancy Yoga and will continue to learn, develop my own practice which I share through my teaching.</p>
        <p>I now realise that, on many occasions in my past, life had been attempting to ‘wake me up’ to mySelf, to connect me, in a more intuitive way, to the innate ability [that we all share] to create my life in my vision.</p>
        <p className="quote">
          Have you been ignoring or missing out on Life’s attempts to wake you up to your true self?
        </p>
      </section>
      <section id="connect" className="section-block section-block--connect">
        <h2>Connect with me</h2>
        <ul className="connect-contact-list">
          <li>
            <a href="#">
              <span>Email</span>
              <span>jess@thelighttreeyoga.co.uk</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Phone</span>
              <span>07927 318 065</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Follow me on instagram</span>
              <span>https://www.instagram.com/the_light_tree_yoga/</span>
            </a>
          </li>
        </ul>
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
          <p>Link to mixcloud once set up
          A monthly talk show going beneath the physical matter to the soul of what matters. 
          Hosted by Jess Gibbs and Shaka Lish with guests. The show is centred around wellbeing, 
          including chat and music discussing topics concerning the African diaspora from the female black British perspective.</p>
          <p>CLASS PLAYLISTS - Soundcloud link</p>
        </div>
      </section>
      
      
      { /*<section className="ctaBlock">
        <CustomLink
          linkType={home.callToActions.firstCTA.linkType}
          linkURL={home.callToActions.firstCTA.linkURL}
          className="ctaBlock-pattern  ctaBlock-pattern--first"
        >
          <div className="ctaBlock-cta">
            <span className="ctaBlock-ctaHeading">{home.callToActions.firstCTA.heading}</span>
            <p className="ctaBlock-ctaDescription">{home.callToActions.firstCTA.subHeading}</p>
          </div>
        </CustomLink>
        <CustomLink
          linkType={home.callToActions.secondCTA.linkType}
          linkURL={home.callToActions.secondCTA.linkURL}
          className="ctaBlock-pattern  ctaBlock-pattern--second"
        >
          <div className="ctaBlock-cta">
            <span className="ctaBlock-ctaHeading">{home.callToActions.secondCTA.heading}</span>
            <p className="ctaBlock-ctaDescription">{home.callToActions.secondCTA.subHeading}</p>
          </div>
        </CustomLink>
          </section> */ }
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
    let upcomingMeetup = null;
    // Find the next meetup that is closest to today
    data.allMarkdownRemark.edges.every(item => {
      const { frontmatter: meetup } = item.node;
      if (isAfter(meetup.rawDate, new Date())) {
        upcomingMeetup = meetup;
        return true;
      } else {
        return false;
      }
    });
    return (
      <Layout footerData={footerData} navbarData={navbarData}>
        <Helmet>
          <meta name="title" content={seoTitle} />
          <meta name="description" content={seoDescription} />
          <title>{browserTitle}</title>
        </Helmet>
        <HomePageTemplate home={home} upcomingMeetup={upcomingMeetup} />
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
            title
            formattedDate: date(formatString: "MMMM Do YYYY @ h:mm A")
            rawDate: date
            presenters {
              name
              image
              text
              presentationTitle
            }
            location {
              mapsLatitude
              mapsLongitude
              mapsLink
              name
            }
          }
        }
      }
    }
    ...LayoutFragment
    homePageData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "home-page" } } }) {
      edges {
        node {
          frontmatter {
            title
            homeBanner {
              itemText1
              itemText2
              itemText3
              itemText4
            }
            sectionWelcome {
              title
              contentText {
                paraText1
                paraText2
                paraText3
                paraText4
                quote
                image
              }
            }
            schedule {
              title
              classesBlock {
                heading
                classes
              }
              workshopBlock {
                heading
                details
              }
              eventBlock {
                heading
                details
              }
            }
            upcomingMeetupHeading
            noUpcomingMeetupText
            mapsNote
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
