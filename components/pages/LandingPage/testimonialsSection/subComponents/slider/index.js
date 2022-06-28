import React, { useState } from "react";
import Slider from "react-slick";
import TestimonialCard from "../testimonialCard";

const ReactSlickSlider = ({
  testimonialsProps: { testimonials, totalTestimonials },
}) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: totalTestimonials < 3 ? totalTestimonials : 3,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveSlideIndex(next),
    centerMode: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    centerPadding: 20,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: totalTestimonials < 2 ? totalTestimonials : 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: totalTestimonials < 1 ? totalTestimonials : 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="custom_slider">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={testimonial.name}
          {...testimonial}
          active={index === activeSlideIndex}
        />
      ))}
    </Slider>
  );
};

export default ReactSlickSlider;
