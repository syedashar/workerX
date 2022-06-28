import { SectionHeading } from "components/global";
import React from "react";
import classes from "stylesheet/pages/landingPage/testimonialsSection/styles.module.scss";
import ReactSlickSlider from "./subComponents/slider";

const TestimonialsSection = ({ testimonialsProps }) => {
  return (
    <section
      className={`${classes.testimonials_section_wrapper} section_margin`}
    >
      <div className="container">
        <SectionHeading
          coloredHeadingText="Testimonials"
          prependText="What Our Customers Say About Us"
          subText="WorkerX helps you increase appointments, and helps you provide excellent customer service"
          centered={true}
        />
        <div className={classes.testimonial_slider_wrapper}>
          <ReactSlickSlider testimonialsProps={testimonialsProps} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
