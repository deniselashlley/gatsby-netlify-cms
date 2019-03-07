import CMS from "netlify-cms";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import ClassesPagePreview from "./preview-templates/ClassesPagePreview";
import TeachingPagePreview from "./preview-templates/TeachingPagePreview";
import HomePagePreview from "./preview-templates/HomePagePreview";
// import MeetupPreview from "./preview-templates/MeetupPreview";
import FooterPreview from "./preview-templates/FooterPreview";
import NavbarPreview from "./preview-templates/NavbarPreview";
// import PastMeetupsPagePreview from "./preview-templates/PastMeetupsPagePreview";
import IntroductionPreview from "./preview-templates/IntroductionPreview";

// CMS.registerPreviewTemplate("meetups", MeetupPreview);
CMS.registerPreviewTemplate("footer", FooterPreview);
CMS.registerPreviewTemplate("navbar", NavbarPreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("classes", ClassesPagePreview);
CMS.registerPreviewTemplate("teaching", TeachingPagePreview);
CMS.registerPreviewTemplate("home", HomePagePreview);
CMS.registerPreviewTemplate("introduction", IntroductionPreview);
// CMS.registerPreviewTemplate("pastMeetups", PastMeetupsPagePreview);
