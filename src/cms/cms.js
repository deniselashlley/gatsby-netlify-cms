import CMS from "netlify-cms";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import ClassesPagePreview from "./preview-templates/ClassesPagePreview";
import TeachingPagePreview from "./preview-templates/TeachingPagePreview";
import HomePagePreview from "./preview-templates/HomePagePreview";
import FooterPreview from "./preview-templates/FooterPreview";
import NavbarPreview from "./preview-templates/NavbarPreview";
import IntroductionPreview from "./preview-templates/IntroductionPreview";
import MyStoryPreview from "./preview-templates/MyStoryPreview";
import ContactPreview from "./preview-templates/ContactPreview";
import TestimonialPreview from "./preview-templates/TestimonialPreview";

CMS.registerPreviewTemplate("footer", FooterPreview);
CMS.registerPreviewTemplate("navbar", NavbarPreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("classes", ClassesPagePreview);
CMS.registerPreviewTemplate("teaching", TeachingPagePreview);
CMS.registerPreviewTemplate("home", HomePagePreview);
CMS.registerPreviewTemplate("introduction", IntroductionPreview);
CMS.registerPreviewTemplate("mystory", MyStoryPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.registerPreviewTemplate("testimonials", TestimonialPreview);
