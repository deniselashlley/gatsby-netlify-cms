import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import "./styles.scss";

export const TestimonialsTemplate = ({ data, settings}) => {
const { title, testimonialList } = data.sectionTestimonial;

return (
  <section className="section-block section-block--testimonials">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="slider-wrapper">
          <Slider {...settings}>
            {testimonialList.map(element =>
              <div key={element.author}>
                <p>{element.description}</p>
                <p><strong>{element.author}</strong></p>
              </div>   
              )}
          </Slider>
        </div>
      </div>
  </section>
);
};

const Testimonials = props => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 7000,
        autoplaySpeed: 5000,
        cssEase: "linear"
      };
  if (!props.data) {
    return null;
  }
  const data = props.data;
  return <TestimonialsTemplate data={data} settings={settings} />
};

export { Testimonials };
